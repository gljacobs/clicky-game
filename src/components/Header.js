import React from 'react';

function Header() {
    var styles = {
        jumbotron: {
            backgroundAttachment: "fixed",
            backgroundImage: "url(./imgs/jumb.gif)",
            backgroundPosition: "0 -200px",
            minHeight: "500px",
            backgroundSize: "100%",
            paddingTop: "100px",
        },
        innerJumb: {
            color: "white",
            fontWeight: "bold",
        }
    };

    return (
        <div className="jumbotron" style={styles.jumbotron}>
            <h1 className="display-4 d-flex justify-content-center" style={styles.innerJumb}>Adventure Time Clicky Game</h1>
            <p className="lead d-flex justify-content-center" style={styles.innerJumb}>Click on an image to earn points, but don't click on any more than once!</p>
        </div>
    );
};

export default Header;
