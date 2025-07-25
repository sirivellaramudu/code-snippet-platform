import React from 'react';

export default function RoomSelector({ roomInput, setRoomInput, setRoomId, roomId }) {
  return (
    <div style={{ marginTop: 20, marginBottom: 8, display: 'flex', alignItems: 'center', gap: 12 }}>
      <input
        type="text"
        value={roomInput}
        onChange={e => setRoomInput(e.target.value)}
        placeholder="Enter room name or ID"
        style={{ padding: '7px 12px', borderRadius: 7, border: '1.5px solid #d0d7e2', fontSize: 15, minWidth: 120 }}
      />
      <button
        onClick={() => setRoomId(roomInput || 'default')}
        style={{ background: '#0a66c2', color: '#fff', border: 'none', borderRadius: 7, padding: '7px 18px', fontWeight: 600, fontSize: 15, cursor: 'pointer', boxShadow: '0 1px 4px #0a66c222' }}
      >
        Join Room
      </button>
      <span style={{ fontSize: 14, color: '#555', marginLeft: 10 }}>
        Current Room: <b>{roomId}</b>
      </span>
    </div>
  );
}
