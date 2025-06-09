import React from "react";

function Clock() {
  const now = new Date();
  const timeString = now.toLocaleTimeString();

  return (
    <div>
      <h1>현재 시간</h1>
      <h2>지금은 {timeString} 입니다.</h2>
    </div>
  );
}

export default Clock;
