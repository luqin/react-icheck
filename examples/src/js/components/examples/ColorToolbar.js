import React from 'react';

class ColorToolbar extends React.Component {

  static propTypes = {
    color: React.PropTypes.string,
    onChange: React.PropTypes.func,
  };

  static defaultProps = {
    color: '',
  };

  constructor(props) {
    super(props);
    this.state = {
      color: props.color,
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({color: nextProps.color});
  }

  handleColor(color) {
    this.setState({color});
    if (this.props.onChange) {
      this.props.onChange(color);
    }
  }

  render() {
    const colors = 'Black Red Green Blue Aero Grey Orange Yellow Pink Purple'.split(' ');

    const lis = colors.map(color=> {
      let newColor = color.toLowerCase();
      if (newColor === 'black') {
        newColor = '';
      }
      return (
        <li
          key={newColor}
          className={newColor + (this.state.color === newColor ? ' active' : '')}
          title={color}
          onClick={this.handleColor.bind(this, newColor)}
        />
      );
    });

    return (
      <div className="colors clear">
        <strong>Color schemes</strong>
        <ul>
          {lis}
        </ul>
      </div>
    );
  }
}

export default ColorToolbar;
