import React from 'react';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
  const navigate = useNavigate();

  const goHome = () => {
    navigate('/');
  };

  const goBack = () => {
    navigate(-1);
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <div className="login-header">
          <h1>404</h1>
          <p>죄송합니다. 페이지를 찾을 수 없습니다</p>
        </div>
        
        <div className="form-actions">
          <button className="btn btn-primary" onClick={goHome}>
            홈으로 가기
          </button>
          <button className="btn btn-outline" onClick={goBack}>
            뒤로 가기
          </button>
        </div>
        
        <div className="login-footer">
          <p>요청하신 페이지가 삭제되었거나 이동되었을 수 있습니다</p>
        </div>
      </div>
    </div>
  );
}

export default NotFound;