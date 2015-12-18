import './style.scss';

import React from 'react';
import { PageHeader } from 'react-bootstrap';
import Demo from './Demo';
import SkinDemo from './SkinDemo';
import LineSkin from './LineSkin';
import PolarisSkin from './PolarisSkin';
import FuturicoSkin from './FuturicoSkin';

class Basic extends React.Component {

  static propTypes = {};

  static defaultProps = {};

  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
  }

  render() {
    return (
      <div>
        <PageHeader>Examples</PageHeader>
        <Demo/>
        <br/>
        <SkinDemo title="Minimal skin" skin="minimal" color=""/>
        <SkinDemo title="Square skin" skin="square" color="green"/>
        <SkinDemo title="Flat skin" skin="flat" color="red"/>
        <LineSkin/>
        <PolarisSkin/>
        <FuturicoSkin/>
        <br/>
      </div>
    );
  }
}

export default Basic;
