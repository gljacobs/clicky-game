import React from 'react';
import './App.css';
import Nav from './components/Nav';
import Header from './components/Header';
import GameImg from './components/GameImg';
import imgList from './imgList.json';
import Footer from './components/Footer';
import shuffle from 'shuffle-array';


class App extends React.Component {
  state = {
    score: 0,
    topScore: 0,
    images: imgList,
    selected: [],
  }

  checkTopScore = () => {
    if (this.state.score > this.state.topScore) {
      this.setState({
        topScore: this.state.score,
      });
    };
  }

  handleClick = (event) => {
    event.persist();
    console.log(event);
    var { id } = event.target;
    if (!this.state.selected.includes(id) ) {
      this.setState({
        images: shuffle(this.state.images),
        selected: [id, ...this.state.selected],
        score: this.state.score + 1,
      }, () => this.checkTopScore());
    }
    else {
      this.setState({
        images: shuffle(this.state.images),
        selected: [],
        score: 0,
      });
    }
  }

  render() {
    return (
      <div className="App">
        <Nav
          score={this.state.score}
          topScore={this.state.topScore}
        />
        <Header />
        <div id="game" className="container">
          {this.state.images.map((item) => {
            console.log(item.id)
            return (
              <GameImg
                key={item.name}
                image={item.image}
                name={item.name}
                id={item.id}
                handleClick={this.handleClick}
              />
            );
          })}
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
