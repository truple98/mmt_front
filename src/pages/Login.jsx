import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';
import './Login.css';

const Login = () => {
  const navigate = useNavigate();

  const handleGoogleLogin = () => {
    // TODO: 구글 OAuth 로그인 로직 구현
    console.log('Google login initiated');
    navigate('/');
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <div className="login-header">
          <h1>Momentum</h1>
          <p>구글 계정으로 로그인하세요</p>
        </div>
        
        <button className="google-login-button" onClick={handleGoogleLogin}>
          <FcGoogle size={20} />
          <span>Google로 계속하기</span>
        </button>
        
        <div className="login-footer">
          <p>처음 사용하시나요? 구글 로그인으로 자동 가입됩니다</p>
        </div>
      </div>
    </div>
  );
}

export default Login;
