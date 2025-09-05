import React from 'react';
import { useNavigate } from 'react-router-dom';
import './NotFound.css';

const NotFound = () => {
  const navigate = useNavigate();

  const goHome = () => {
    navigate('/');
  };

  return (
    <div className="not-found-container">
      <div className="not-found-content">
        <h2 className="not-found-title">페이지를 찾을 수 없습니다</h2>
        <p className="not-found-message">
          요청하신 페이지가 삭제되었거나 이동되었습니다.<br/>
          URL을 다시 확인해 주세요.
        </p>
        <div className="not-found-actions">
          <button className="not-found-btn" onClick={goHome}>
            홈으로 가기
          </button>
        </div>
      </div>
    </div>
  );
}

export default NotFound;