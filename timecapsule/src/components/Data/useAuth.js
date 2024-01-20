import { useSupabaseClient } from "@supabase/auth-helpers-react";

function useAuth() {
	const supabaseClient = useSupabaseClient();

	async function checkLogin({
		loginFailFunc = () => {},
		loginSuccessFunc = () => {},
	}) {
		const authInfo = await supabaseClient.auth.getSession();
		const session = authInfo.data.session;

		if (session == null) {
			loginFailFunc();
		} else {
			loginSuccessFunc();
		}
	}

	async function getUserData({
		getDataFailFunc = () => {},
		getDataSuccessFunc = () => {},
	}) {
		await supabaseClient.auth.getUser().then(async (value) => {
			if (value.data?.user) {
				const { data: userData, error } = await supabaseClient
					.from("users")
					.select()
					.eq("user_id", value.data.user.id);
				if (error) {
					console.log(error);
					getDataFailFunc();
				} else {
					getDataSuccessFunc(userData);
				}
			}
		});
	}

	return {
		checkLogin,
		getUserData,
	};
}

export default useAuth;
