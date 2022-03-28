var ReactCSSTransitionGroup = React.addons.CSSTransitionGroup;
class Carousel extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            items: this.props.items,
            images: this.props.images,
            active: this.props.active,
            direction: ''
        };

        this.rightClick = this.moveRight.bind(this);
        this.leftClick = this.moveLeft.bind(this);
    }

    generateItems() {
        var items = [];
        var level;
        console.log(this.state.active);
        for (var i = this.state.active - 1; i < this.state.active + 2; i++) {
            var index = i;
            if (i < 0) {
                index = this.state.items.length + i;
            } else if (i >= this.state.items.length) {
                index = i % this.state.items.length;
            }
            level = this.state.active - i;
            items.push( /*#__PURE__*/ React.createElement(Item, {
                key: index,
                id: this.state.items[index],
                image: this.state.images[index],
                level: level
            }));
        }
        return items;
    }

    moveLeft() {
        var newActive = this.state.active;
        this.setState({
            active: (newActive + 1) % this.state.items.length,
            direction: 'right'
        });

    }

    moveRight() {
        var newActive = this.state.active;
        newActive--;
        this.setState({
            active: newActive < 0 ? this.state.items.length - 1 : newActive,
            direction: 'left'
        });

    }

    render() {
        return /*#__PURE__*/ (
            React.createElement("div", { id: "carousel", className: "noselect" }, /*#__PURE__*/
                React.createElement("div", { className: "arrow arrow-left", onClick: this.leftClick }, /*#__PURE__*/
                    ""), /*#__PURE__*/


                React.createElement(ReactCSSTransitionGroup, {
                        transitionName: this.state.direction
                    },
                    this.generateItems()), /*#__PURE__*/

                React.createElement("div", { className: "arrow arrow-right", onClick: this.rightClick }, /*#__PURE__*/
                    "")));


    }
}


class Item extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            level: this.props.level
        };

    }

    render() {
        const className = 'item level' + this.props.level;
        return /*#__PURE__*/ (
            React.createElement("div", { className: className },
                React.createElement("div", { className: "carousel_inner zoom" },

                    React.createElement("img", { src: this.props.image })),

            ));
    }
}


var imagenes = ["./img/gal/gal-20.jpg", "./img/gal/gal-15.jpg", "./img/gal/gal-09.jpg", "./img/gal/gal-10.jpg", "./img/gal/gal-04.jpg", "./img/gal/gal-13.png", "./img/gal/gal-01.png", "./img/gal/gal-02.jpg", "./img/gal/gal-16.jpg", "./img/gal/gal-11.jpg", "./img/gal/gal-21.jpg"]
ReactDOM.render( /*#__PURE__*/ React.createElement(Carousel, { items: imagenes, images: imagenes, active: 0 }), document.getElementById('app'));