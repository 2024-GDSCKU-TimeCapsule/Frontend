import './Nickname.css';
import Header from '../../../components/Layout/Header/Header';
import Footer from '../../../components/Layout/Footer/Footer';
import { useNavigate } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import { useSupabaseClient } from '@supabase/auth-helpers-react';
const Nickname = () => {
    const supabaseClient = useSupabaseClient();
    const navigate = useNavigate();
    const [user, setUser] = useState({
        id: '',
        nickname: '',
        userId: '',
    });
    const [newUserNickname, setNewUserNickname] = useState('');

    useEffect(() => {
        async function checkLogin() {
            const authInfo = await supabaseClient.auth.getSession();
            const session = authInfo.data.session;

            if (session == null) {
                console.log('log in fail');
                navigate('/login');
            } else {
                console.log('log in success');
            }
        }
        checkLogin();

        async function getUserData() {
            await supabaseClient.auth.getUser().then(async (value) => {
                if (value.data?.user) {
                    const { data: userData, error } = await supabaseClient
                        .from('users')
                        .select()
                        .eq('user_id', value.data.user.id);

                    // console.log('Supabase Data:', userData);
                    // console.log(value.data.user);
                    if (error) {
                        console.log(error);
                    } else {
                        setUser({
                            id: userData[0].id,
                            nickname: userData[0].nickname,
                            userId: userData[0].user_id,
                        });
                    }
                }
            });
        }
        getUserData();
    }, [supabaseClient]);
    async function updateNickname() {
        // console.log('여기', newUserNickname);
        const { error } = await supabaseClient
            .from('users')
            .update({
                nickname: newUserNickname,
            })
            .eq('user_id', user.userId);

        if (error) {
            console.error('Error updating nickname:', error.message);
        } else {
            console.log('Nickname updated successfully');
            //setUser({ ...user, nickname: "update test" });
        }
    }
    return (
        <>
            <div className="main-container">
                <Header />
                <div className="main-modal">
                    <div className="title">닉네임설정</div>
                    <div>
                        <input
                            type="text"
                            placeholder={user.nickname}
                            onChange={(e) => setNewUserNickname(e.target.value)}
                        ></input>
                    </div>
                    <div className="buttons">
                        <button
                            type="submit"
                            className="button2 white"
                            onClick={() => {
                                updateNickname();
                                // console.log(user.nickname);
                                window.location.href = '/mypage';
                            }}
                        >
                            확인
                        </button>
                        <button
                            type="button"
                            className="button2"
                            onClick={() => {
                                window.location.href = '/mypage';
                            }}
                        >
                            취소
                        </button>
                    </div>
                </div>
                <div class="withdraw">계정 탈퇴</div>
                <div className="main-footer">
                    <Footer />
                </div>
            </div>
        </>
    );
};

export default Nickname;
