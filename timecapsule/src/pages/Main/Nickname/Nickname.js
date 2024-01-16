import './Nickname.css';
import Header from '../../../components/Layout/Header/Header';
import Footer from '../../../components/Layout/Footer/Footer';
import { useNavigate } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import { useSupabaseClient } from '@supabase/auth-helpers-react';
const Nickname = () => {
    return (
        <>
            <div className="main-container">
                <Header />
                <div className="main-modal">
                    <div className="title">닉네임설정</div>
                    <div>
                        <input type="text" placeholder="임시"></input>
                    </div>
                    <div className="buttons">
                        <button
                            type="submit"
                            className="button2 white"
                            onClick={() => {
                                // updateNickname();
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
