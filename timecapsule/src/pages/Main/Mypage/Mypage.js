import './Mypage.css';
import Header from '../../../components/Layout/Header/Header';
import Footer from '../../../components/Layout/Footer/Footer';
import { Link } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
// import { supabaseClient } from '../../../SupabaseProvider';

const Mypage = () => {
    const nickname = 'nickname';
    const email = 'email@korea.ac.kr';
    const [user, setUser] = useState(null);

    // async function getUserData() {
    //     await supabaseClient.auth.getUser().then(async (value) => {
    //         if (value.data?.user) {
    //             const { data: userData, error } = await supabaseClient
    //                 .from('users')
    //                 .select()
    //                 .eq('user_id', value.data.user.id);
    //             if (error) {
    //                 console.log(error);
    //             } else {
    //                 setUser({
    //                     id: userData[0].id,
    //                     nickname: userData[0].nickname,
    //                     userId: userData[0].user_id,
    //                 });
    //             }
    //         }
    //     });
    // }

    // useEffect(() => {
    //     getUserData();
    // }, []);

    return (
        <>
            <div className="main-container">
                <Header />
                <div className="nickname">{nickname} 님</div>
                <div className="email">{email}</div>
                <div className="mypage-buttons">
                    <Link to="/nickname">
                        <button className="button1 white">닉네임 수정하기</button>
                    </Link>
                    <Link to="/login">
                        <button className="button1 light">로그아웃</button>
                    </Link>
                </div>

                <Link to="/withdraw">
                    <div className="withdraw">계정 탈퇴</div>
                </Link>

                <div className="main-footer">
                    <Footer />
                </div>
            </div>
        </>
    );
};

export default Mypage;
