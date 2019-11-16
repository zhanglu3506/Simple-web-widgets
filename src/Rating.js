import React from 'react';

class Rating extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            rate: [1, 2, 3, 4, 5].map((e) => {
                let o = {
                    id: e,
                    checked: false,
                    hovered: false
                }
                return o;
            })
        }
    }

    render() {
        return (
            <div className="rating-body">
                <h1>Star Rating</h1>
                <div className="rating-stars" onMouseOut={()=> this.handleMouseOut()}>
                    {this.renderStars()}
                </div>
            </div>
        );
    }

    renderStars = () => {
        let rate  =  JSON.parse(JSON.stringify(this.state.rate));
        return rate.map((obj, index) => {
            let starClass = obj.checked || obj.hovered ? "star star-checked" : "star";
            return(
                <div key={index} onClick={() => this.handleClick(obj.id)} onMouseOver={() => this.handleMouseOver(obj.id)}>
                    <label className={starClass}>&#9733;</label>
                    <input className="star-input" type="checkbox" value={obj.id} checked={obj.checked}></input>
                </div>
            );
        });
    }

    handleMouseOut = () => {
        let rate  =  JSON.parse(JSON.stringify(this.state.rate));
        rate.forEach((e) => {
            e.hovered = false;
        });
        this.setState({rate: rate});
    }

    handleClick = (id) => {
        let rate  =  JSON.parse(JSON.stringify(this.state.rate));
        rate.forEach((e) => {
            if(e.id <= id) {
                e.checked = true;
            } else {
                e.checked = false;
            }
        });
        this.setState({rate: rate});
    }

    handleMouseOver = (id) => {
        let rate  =  JSON.parse(JSON.stringify(this.state.rate));
        rate.forEach((e) => {
            if(e.id <= id) {
                e.hovered = true;
            } else {
                e.hovered = false;
            }
        });
        this.setState({rate: rate});
    }
}

export default Rating;