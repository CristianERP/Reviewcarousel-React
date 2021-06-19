import React from 'react';
import './App.css';

const REVIEW = [
  {
    id: 1,
    name: "susan smith",
    job: "web developer",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
    text:
      "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
  },
  {
    id: 2,
    name: "anna johnson",
    job: "web designer",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg",
    text:
      "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
  },
  {
    id: 3,
    name: "peter jones",
    job: "intern",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
    text:
      "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
  },
  {
    id: 4,
    name: "bill anderson",
    job: "the boss",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
    text:
      "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
  },
];

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      id: 0
    }
    this.selectId = this.selectId.bind(this);
    this.moveLeft = this.moveLeft.bind(this);
    this.moveRight = this.moveRight.bind(this);
    this.arrLenght = REVIEW.length
  }

  moveLeft(){
    if(this.state.id > 0){
      this.setState({
        id: this.state.id - 1
      })
    } else{
      this.setState({
        id: (this.arrLenght-1)
      })
    }
  }
  moveRight(){
    if(this.state.id < (this.arrLenght-1)){
      this.setState({
        id: this.state.id + 1
      })
    } else {
      this.setState({
        id: 0
      })
    }
  }
  selectId(){

    let id = Math.floor(Math.random() * this.arrLenght)
    this.setState({
      id: id
    })
  }

  render(){
    return (
      <main>
        <div className="container">
          <h1>our reviews</h1>
          <div className="line"></div>
          <div className="card">
            <img src={REVIEW[this.state.id].img} className="card-img" alt={REVIEW[this.state.id].name}></img>
            <div className="card-title">
              <h4>{REVIEW[this.state.id].name}</h4>
              <span className="card-subtitle">{REVIEW[this.state.id].job}</span>
            </div>
            <div className="card-body">
              {REVIEW[this.state.id].text}
            </div>
            <div className="card-button">
              <button className="btn" onClick={this.moveLeft}>{'<'}</button>
              <button className="btn" onClick={this.moveRight}>{'>'}</button>
            </div>
            <button className="btn btn-surprise" onClick={this.selectId}>Surprise me</button>
          </div>
        </div>
      </main>
    );
  }
}

export default App;
