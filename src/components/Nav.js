import React from 'react';

function Nav(props) {
    var styles = {
        nav: {
            backgroundColor: "#DA071D",
            color: "white",
        },
        a: {
            color: "white",
            fontSize: "calc(10px + 14 * (100vw - 320px)/ 800)",
        },
        navItems: {
            display: "flex",
            flexDirection: "row",
        },
        span1: {
            position: "relative",
            right: "40%",
            fontSize: "calc(10px + 14 * (100vw - 320px)/ 800)",
        },
        span2: {
            fontSize: "calc(10px + 14 * (100vw - 320px)/ 800)",
        },
    }

    return (
        <div>
            <nav className="navbar fixed-top" style={styles.nav}>
                <a className="navbar-brand mb-0 h3" href="#" style={styles.a}>Clicky Game</a>
                <div className="navbar-nav" style={styles.navItems}>
                    <span className="nav-item mb-0 h1" style={styles.span1}>
                        Click an image to begin!
                        </span>
                    <span className="nav-item mb-0 h1" style={styles.span2}>
                        Score: {props.score} | Top Score: {props.topScore}
                    </span>
                </div>
            </nav>
        </div>
    );
};

export default Nav;