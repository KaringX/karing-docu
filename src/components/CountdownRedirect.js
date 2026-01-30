import React, { useEffect, useState } from 'react';

const CountdownRedirect = ({ seconds = 10, href = '/', title = "page" }) => {
    const [remaining, setRemaining] = useState(seconds);
    const [cancelled, setCancelled] = useState(false);

    useEffect(() => {
        if (cancelled) return;

        if (remaining <= 0) {
            window.location.href = href;
        } else {
            const timer = setTimeout(() => setRemaining((r) => r - 1), 1000);
            return () => clearTimeout(timer);
        }
    }, [remaining, cancelled, href]);

    const cancelRedirect = () => {
        setCancelled(true);
    };

    return (
        <div style={{ padding: '0.8em', border: '1px solid #ccc', borderRadius: '8px' }}>
            <p style={{ "margin-bottom": '0.2em' }}>
                页面将在 <strong id="countdown">{remaining}</strong> 秒后跳转到：
                <a href={href}>{title}</a>
            </p>
            <button
                id="cancelRedirect"
                onClick={cancelRedirect}
                disabled={cancelled}
                style={{
                    padding: '0.5em 1em',
                    backgroundColor: cancelled ? '#ccc' : '#f44336',
                    color: '#fff',
                    border: 'none',
                    borderRadius: '4px',
                    cursor: cancelled ? 'not-allowed' : 'pointer',
                }}
            >
                {cancelled ? '已取消' : '取消跳转'}
            </button>
        </div >
    );
};

export default CountdownRedirect;
