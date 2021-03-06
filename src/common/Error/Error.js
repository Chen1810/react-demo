import React from 'react';

class Error extends React.Component{
    render(){
        return (
            <div>
                <header className="page-header">
                    <a href="javascript:history.go(-1)" className="page-return">
                        <img src="/assets/images/return.png" alt="" className="return" />
                    </a>
                    <h3 className="page-name">错误</h3>
                </header>
                <section className="error-box">
                    <div className="error-pic">
                        <img src="/assets/images/error.png" alt="" />
                    </div>
                    <div className="error-title">
                        网络有点问题哦！
                    </div>
                    <div className="error-text">
                        网络不可用，请检查后重试
                    </div>
                    <div className="error-btn">
                        <button>重试</button>
                    </div>
                </section>
            </div>
        )
    }
}

export default Error;