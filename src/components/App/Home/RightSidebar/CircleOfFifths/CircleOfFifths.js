import React from 'react';
import { Button } from 'react-bootstrap';
import './CircleOfFifths.css';
import blankCircleOfFifths from '../../../../../assets/img/blank_circle_of_fifths.png';

class CircleOfFifths extends React.Component {
  state = {
    mode: 'major'
  };
  render = () => {
    return (
      <div className="circle_of_fifths_container">
        <Button
          bsSize="large"
          bsStyle={this.state.mode === 'major' ? 'primary' : null}
          onClick={() =>
            this.setState({
              mode: 'major'
            })
          }
        >
          Major
        </Button>
        <Button
          bsSize="large"
          bsStyle={this.state.mode === 'minor' ? 'primary' : null}
          onClick={() =>
            this.setState({
              mode: 'minor'
            })
          }
          className="minor_button"
        >
          Minor
        </Button>
        <div className="circle-of-fifths">
          <svg id="svg64" width="418.66666" viewBox="0 0 418.66666 429.33334">
            <image
              width="418.66666"
              height="429.33334"
              preserveAspectRatio="none"
              href={blankCircleOfFifths}
            />
            <text x="198.9057" y="47.854275" id="key1Text" className="key_text">
              <tspan id="tspan74" x="200" y="47.854275">
                {this.state.mode === 'major' ? 'C' : 'a'}
              </tspan>
            </text>
            <text x="289.87677" y="70.16684" id="key2Text" className="key_text">
              <tspan id="tspan103" x="289.87677" y="70.16684">
                {this.state.mode === 'major' ? 'G' : 'e'}
              </tspan>
            </text>
            <text
              x="351.46545"
              y="138.33368"
              id="key3Text"
              className="key_text"
            >
              <tspan id="tspan107" x="351.46545" y="138.33368">
                {this.state.mode === 'major' ? 'D' : 'b'}
              </tspan>
            </text>
            <text
              x="372.95404"
              y="224.53389"
              id="key4Text"
              className="key_text"
            >
              <tspan id="tspan111" x="372.95404" y="224.53389">
                {this.state.mode === 'major' ? 'A' : 'f'}
              </tspan>
            </text>
            <text
              x="350.88733"
              y="307.85699"
              id="key5Text"
              className="key_text"
            >
              <tspan id="tspan115" x="350.88733" y="307.85699">
                {this.state.mode === 'major' ? 'E' : 'c'}
              </tspan>
            </text>
            <text x="287.58258" y="370.6217" id="key6Text" className="key_text">
              <tspan id="tspan123" x="287.58258" y="370.6217">
                {this.state.mode === 'major' ? 'B' : 'g'}
              </tspan>
            </text>
            <text
              x="197.34424"
              y="395.37286"
              id="key7Text"
              className="key_text"
            >
              <tspan id="tspan127" x="197.34424" y="395.37286">
                {this.state.mode === 'major' ? 'G' : 'e'}
              </tspan>
            </text>
            <text
              x="112.45966"
              y="371.06027"
              id="key8Text"
              className="key_text"
            >
              <tspan id="tspan131" x="112.45966" y="371.06027">
                {this.state.mode === 'major' ? 'D' : 'b'}
              </tspan>
            </text>
            <text
              x="51.957123"
              y="307.85699"
              id="key9Text"
              className="key_text"
            >
              <tspan id="tspan135" x="51.957123" y="307.85699">
                {this.state.mode === 'major' ? 'A' : 'f'}
              </tspan>
            </text>
            <text
              x="26.515503"
              y="224.58699"
              id="key10Text"
              className="key_text"
            >
              <tspan id="tspan139" x="26.515503" y="224.58699">
                {this.state.mode === 'major' ? 'E' : 'c'}
              </tspan>
            </text>
            <text
              x="49.309502"
              y="137.70242"
              id="key11Text"
              className="key_text"
            >
              <tspan id="tspan143" x="49.309502" y="137.70242">
                {this.state.mode === 'major' ? 'B' : 'g'}
              </tspan>
            </text>
            <text
              x="112.07423"
              y="72.253326"
              id="key12Text"
              className="key_text"
            >
              <tspan id="tspan147" x="112.07423" y="72.253326">
                {this.state.mode === 'major' ? 'F' : 'd'}
              </tspan>
            </text>
            <text
              x="390.68103"
              y="214.02751"
              id="key4Accidental"
              className="accidental_text"
            >
              <tspan id="tspan199" x="385" y="214.02751">
                {this.state.mode === 'major' ? '' : '♯'}
              </tspan>
            </text>
            <text
              x="368.13934"
              y="296.97205"
              id="key5Accidental"
              className="accidental_text"
            >
              <tspan id="tspan203" x="364" y="296.97205">
                {this.state.mode === 'major' ? '' : '♯'}
              </tspan>
            </text>
            <text
              x="307.69482"
              y="360.43048"
              id="key6Accidental"
              className="accidental_text"
            >
              <tspan id="tspan207" x="302" y="360.43048">
                {this.state.mode === 'major' ? '' : '♯'}
              </tspan>
            </text>
            <text
              x="217.5172"
              y="387.23322"
              id="key7Accidental"
              className="accidental_text"
            >
              <tspan
                id="tspan155"
                x={this.state.mode === 'major' ? '213' : '211'}
                y="387.23322"
              >
                ♭
              </tspan>
            </text>
            <text
              x="132.63261"
              y="362.04361"
              id="key8Accidental"
              className="accidental_text"
            >
              <tspan
                id="tspan159"
                x={this.state.mode === 'major' ? '129' : '127'}
                y="362.04361"
              >
                ♭
              </tspan>
            </text>
            <text
              x="67.097038"
              y="298.01636"
              id="key9Accidental"
              className="accidental_text"
            >
              <tspan id="tspan163" x="66" y="298.01636">
                {this.state.mode === 'major' ? '♭' : ''}
              </tspan>
            </text>
            <text
              x="42.485531"
              y="215.18489"
              id="key10Accidental"
              className="accidental_text"
            >
              <tspan id="tspan167" x="39" y="215.18489">
                {this.state.mode === 'major' ? '♭' : ''}
              </tspan>
            </text>
            <text
              x="65.777779"
              y="128.71725"
              id="key11Accidental"
              className="accidental_text"
            >
              <tspan id="tspan171" x="64" y="128.71725">
                {this.state.mode === 'major' ? '♭' : ''}
              </tspan>
            </text>
            <path
              d="m 158.56964,18.36235 31.30559,117.39598 3.23265,-0.8507 3.99827,-0.68055 4.25347,-0.42535 4.7639,-0.34028 h 4.76389 l 5.10418,0.34028 5.27431,0.51042 5.0191,0.93576 3.23264,0.8507 0.59549,-1.53126 31.22053,-115.694583 -6.38022,-1.78646 -8.25175,-1.531252 -7.57119,-1.276043 -6.46528,-0.935765 -6.7205,-0.765626 -8.42188,-0.340278 -8.50696,-0.340279 -8.42188,0.08507 -9.44272,0.680556 -9.18751,1.105904 -8.16668,1.105905 -8.25175,1.701391 z"
              id="key1"
              className={
                'key' +
                ((this.state.mode === 'major' &&
                  this.props.activeKey === 'C') ||
                (this.state.mode === 'minor' && this.props.activeKey === 'a')
                  ? ' active'
                  : '')
              }
              onClick={e => this.props.handleClick(e, this.state.mode)}
            />
            <path
              d="m 262.50881,18.847529 -31.76092,117.599611 3.48889,0.9023 5.6544,2.34598 5.4138,2.94751 5.89501,3.36858 5.23334,3.66935 4.45134,3.60919 3.54904,3.30843 1.62414,-1.32337 84.87624,-84.755934 -6.5567,-6.255939 -6.91763,-6.075479 -8.06053,-6.316092 -7.45901,-5.293486 -7.09808,-4.571647 -5.83487,-3.549042 -6.79732,-3.729502 -7.27854,-3.669349 -7.39885,-3.067816 -6.91762,-2.947509 -8.54177,-3.007663 -5.29348,-1.744445 z"
              id="key2"
              className={
                'key' +
                ((this.state.mode === 'major' &&
                  this.props.activeKey === 'G') ||
                (this.state.mode === 'minor' && this.props.activeKey === 'e')
                  ? ' active'
                  : '')
              }
              onClick={e => this.props.handleClick(e, this.state.mode)}
            />
            <path
              d="m 351.67752,71.360679 -86.26053,86.090381 -0.17013,0.34028 4.08333,4.25348 3.48786,5.0191 3.40278,5.27431 2.38194,4.59376 2.38195,5.27431 1.61632,4.67883 1.44619,4.76389 118.67202,-31.39066 -1.61632,-5.69966 -1.9566,-6.29515 -2.55209,-7.06077 -2.63716,-6.29515 -2.72222,-6.72049 -3.06251,-6.12501 -2.97743,-5.61459 -3.0625,-5.35938 -2.63716,-4.7639 -3.74306,-5.78473 -3.82813,-5.529516 -4.59376,-6.039938 -4.08333,-5.189242 -3.99827,-4.678826 -4.59376,-4.848964 z"
              id="key3"
              className={
                'key' +
                ((this.state.mode === 'major' &&
                  this.props.activeKey === 'D') ||
                (this.state.mode === 'minor' && this.props.activeKey === 'b')
                  ? ' active'
                  : '')
              }
              onClick={e => this.props.handleClick(e, this.state.mode)}
            />
            <path
              d="m 403.08696,161.23028 -118.74252,31.4 0.78199,3.12797 0.66169,4.57165 0.60153,5.65441 0.12031,4.93256 -0.0602,5.5341 -0.42107,4.75211 -0.54138,4.75211 -0.54138,3.42873 -0.54138,2.28583 118.20115,31.64061 0.72184,-1.98506 0.84214,-3.12797 0.84215,-3.84981 1.20306,-6.13563 1.20307,-6.37624 0.72184,-6.49655 0.72184,-7.27855 0.60153,-5.89502 0.12031,-6.67701 0.0601,-7.81992 -0.12031,-5.4138 -0.42107,-6.43639 -0.48123,-6.67701 -0.78199,-6.07548 -0.96245,-5.89502 -0.9023,-5.17318 -1.26322,-5.29349 -1.14291,-4.15057 z"
              id="key4"
              className={
                'key' +
                ((this.state.mode === 'major' &&
                  this.props.activeKey === 'A') ||
                (this.state.mode === 'minor' && this.props.activeKey === 'f♯')
                  ? ' active'
                  : '')
              }
              onClick={e => this.props.handleClick(e, this.state.mode)}
            />
            <path
              d="m 402.42528,263.79158 -118.11092,-31.61053 -0.69176,2.52644 -1.08276,3.15804 -1.53391,3.90996 -1.08276,2.76705 -1.29329,2.85728 -1.35345,2.7069 -1.86475,3.2182 -1.86475,3.06781 -2.34598,3.12797 -2.3159,2.7069 -1.68429,2.28582 -1.89483,1.89483 -0.24061,0.27069 1.62414,1.2933 84.87624,84.99655 7.18831,-7.60939 4.93257,-5.83487 4.5115,-5.68448 4.00019,-5.44387 4.54157,-6.0454 4.1205,-6.73717 2.61666,-4.66187 3.75958,-6.64694 3.7295,-7.72969 3.18813,-7.57931 2.70689,-6.61686 1.83468,-5.71456 1.95498,-5.50402 1.14291,-4.21073 z"
              id="key5"
              className={
                'key' +
                ((this.state.mode === 'major' &&
                  this.props.activeKey === 'E') ||
                (this.state.mode === 'minor' && this.props.activeKey === 'c♯')
                  ? ' active'
                  : '')
              }
              onClick={e => this.props.handleClick(e, this.state.mode)}
            />
            <path
              d="m 264.37356,267.34063 -3.00767,2.94751 -3.78965,3.30843 -3.90996,2.94751 -5.11303,3.18812 -4.93257,2.64674 -4.45134,2.04521 -4.15057,1.68429 -4.39119,1.20307 0.30077,1.8046 31.21954,115.73486 4.7521,-1.14291 9.1433,-2.94751 6.61686,-2.34598 6.13563,-2.46628 5.71456,-2.64675 6.19578,-3.24827 7.09809,-3.7295 5.5341,-3.12797 5.59425,-3.42874 5.05287,-3.60919 5.47395,-3.97012 4.87241,-3.66935 3.97012,-3.24827 4.39119,-3.78966 4.15057,-3.60919 4.09042,-4.21073 z"
              id="key6"
              className={
                'key' +
                ((this.state.mode === 'major' &&
                  this.props.activeKey === 'B') ||
                (this.state.mode === 'minor' && this.props.activeKey === 'g♯')
                  ? ' active'
                  : '')
              }
              onClick={e => this.props.handleClick(e, this.state.mode)}
            />
            <path
              d="m 158.65471,405.34373 31.13545,-117.0557 3.99827,0.8507 4.16841,0.68055 3.65799,0.51042 4.67883,0.0851 4.67882,0.0851 3.99827,-0.34028 5.0191,-0.51042 4.33855,-0.85069 2.97744,-0.59549 2.4796,-0.65084 31.33984,117.65977 -5.11303,1.38352 -4.6318,1.08276 -7.15823,1.26322 -5.95518,1.08276 -4.93256,0.66168 -5.65441,0.66169 -7.27854,0.42107 -6.13563,0.30077 -5.47395,0.0601 -6.61686,-0.1203 h -5.59425 l -5.23333,-0.54138 -6.55671,-0.66169 -9.14329,-1.38352 -6.61686,-1.32338 -6.07548,-1.38352 z"
              id="key7"
              className={
                'key' +
                ((this.state.mode === 'major' &&
                  this.props.activeKey === 'G♭') ||
                (this.state.mode === 'minor' && this.props.activeKey === 'e♭')
                  ? ' active'
                  : '')
              }
              onClick={e => this.props.handleClick(e, this.state.mode)}
            />
            <path
              d="m 157.97415,405.5564 31.44845,-117.43282 -6.0454,-1.74445 -5.5341,-2.04521 -4.51149,-1.98506 -3.78966,-2.04521 -4.33103,-2.70689 -3.57912,-2.43621 -3.06782,-2.58659 -2.46628,-2.10536 -1.59406,-1.65422 -1.56399,1.02261 -84.485245,84.30478 3.729501,3.54905 3.940039,3.66934 5.233333,4.72204 7.459004,5.80478 6.135632,4.5115 6.225866,4.33103 7.21839,4.21073 6.61685,3.63927 7.21839,3.6092 5.86495,2.91743 6.70709,2.58659 5.62432,2.13544 6.91763,2.61667 5.6544,1.65421 z"
              id="key8"
              className={
                'key' +
                ((this.state.mode === 'major' &&
                  this.props.activeKey === 'D♭') ||
                (this.state.mode === 'minor' && this.props.activeKey === 'b♭')
                  ? ' active'
                  : '')
              }
              onClick={e => this.props.handleClick(e, this.state.mode)}
            />
            <path
              d="m 67.913025,353.84101 85.959005,-85.23716 -2.58659,-2.73698 -3.45882,-4.03027 -2.16551,-2.79712 -2.37606,-3.48889 -2.55651,-3.94004 -1.77452,-3.81973 -1.4136,-3.15805 -1.47376,-3.42873 -1.14291,-3.2182 -0.9023,-2.91743 -0.57145,-1.92491 -1.89483,0.48123 -115.343868,30.58793 1.112836,4.03027 1.684291,5.56417 1.714367,5.47395 2.075288,5.20325 2.22567,5.77472 2.736973,5.80479 2.526437,5.26341 2.736973,5.71456 3.488889,5.95517 3.488889,6.07548 3.428735,4.84233 4.030268,5.9251 3.30843,4.60172 4.932566,5.95518 4.240805,5.02279 3.518965,3.87989 3.278353,3.2182 z"
              id="key9"
              className={
                'key' +
                ((this.state.mode === 'major' &&
                  this.props.activeKey === 'A♭') ||
                (this.state.mode === 'minor' && this.props.activeKey === 'f')
                  ? ' active'
                  : '')
              }
              onClick={e => this.props.handleClick(e, this.state.mode)}
            />
            <path
              d="m 133.21891,232.56748 -117.013161,31.09292 -1.914065,-6.8481 -1.616321,-7.74133 -1.233509,-7.48612 -0.80816,-6.42275 -0.808161,-6.50782 -0.2126739,-6.25262 -0.2977434,-6.33768 0.042535,-6.55035 v -6.08248 l 0.5529521,-6.76302 0.5104172,-6.59289 1.105904,-8.84724 0.935765,-5.82726 1.318578,-5.9974 0.89323,-4.72136 1.06337,-3.95574 2.084204,0.34028 115.396839,30.71011 -0.80816,3.31771 -0.46788,3.36025 -0.55295,4.25347 -0.51042,4.12588 -0.0851,3.65799 0.17014,3.53038 0.21268,3.82813 0.2552,3.36025 0.68056,4.12587 0.42535,3.65799 z"
              id="key10"
              className={
                'key' +
                ((this.state.mode === 'major' &&
                  this.props.activeKey === 'E♭') ||
                (this.state.mode === 'minor' && this.props.activeKey === 'c')
                  ? ' active'
                  : '')
              }
              onClick={e => this.props.handleClick(e, this.state.mode)}
            />
            <path
              d="m 133.30398,191.26621 1.99914,-5.95487 2.12674,-5.65712 2.42448,-5.06164 2.76476,-4.72136 2.38195,-3.70053 2.55208,-3.40278 2.25435,-2.67969 1.91406,-1.99914 1.78646,-1.82899 -1.36111,-1.44618 -84.388994,-84.261392 -3.487851,3.82813 -4.381082,4.678825 -3.062504,3.572922 -2.977434,3.445316 -2.9349,3.785595 -2.934899,3.82813 -2.467017,3.785595 -2.339413,3.105039 -2.296877,3.48785 -1.871531,3.44532 -2.296877,3.44531 -1.828996,3.23265 -2.126738,3.87066 -1.786461,3.70053 -1.87153,3.74306 -1.9566,4.25347 -1.956599,4.33855 -1.87153,4.42362 -1.786461,4.67882 -1.914065,5.31685 -1.361113,4.63629 -1.020834,3.65799 -0.9783,3.40278 1.190974,0.34029 z"
              id="key11"
              className={
                'key' +
                ((this.state.mode === 'major' &&
                  this.props.activeKey === 'B♭') ||
                (this.state.mode === 'minor' && this.props.activeKey === 'g')
                  ? ' active'
                  : '')
              }
              onClick={e => this.props.handleClick(e, this.state.mode)}
            />
            <path
              d="m 69.176244,69.977796 85.116856,85.237164 3.30843,-2.94751 2.94751,-2.52644 3.66935,-2.52643 3.97011,-2.52644 4.33104,-2.22567 3.8498,-2.04521 4.27089,-1.86475 3.66934,-1.26322 2.76705,-0.78199 1.50384,-0.42108 L 188.4,134.7027 157.72184,19.449062 l -0.30077,-0.541379 -5.05287,1.443678 -7.69962,2.58659 -6.73717,2.165517 -7.39885,3.007663 -6.91762,3.188122 -6.49655,3.007663 -5.29349,2.706896 -6.13563,3.729502 -5.59425,3.428736 -5.353643,3.789655 -5.714559,4.331034 -5.955172,4.391188 -5.895019,5.17318 -4.150575,3.729502 -3.729502,3.549042 -0.781992,0.421073 1.082758,0.902298 z"
              id="key12"
              className={
                'key' +
                ((this.state.mode === 'major' &&
                  this.props.activeKey === 'F') ||
                (this.state.mode === 'minor' && this.props.activeKey === 'd')
                  ? ' active'
                  : '')
              }
              onClick={e => this.props.handleClick(e, this.state.mode)}
            />
          </svg>
        </div>
        {/* // <ul className="circle-of-fifths">
        //   <li className="key">
        //     <div className="major">
        //       {this.state.mode === 'major' ? 'C' : 'a'}
        //     </div>
        //   </li>
        //   <li className="key">
        //     <div className="major">
        //       {this.state.mode === 'major' ? 'G' : 'e'}
        //     </div>
        //   </li>
        //   <li className="key">
        //     <div className="major">
        //       {this.state.mode === 'major' ? 'D' : 'b'}
        //     </div>
        //   </li>
        //   <li className="key">
        //     <div className="major">
        //       {this.state.mode === 'major' ? 'A' : 'f'}
        //       {this.state.mode === 'major' ? null : <span className="accidental">
        //           &#x0266F;
        //         </span>}
        //     </div>
        //   </li>
        //   <li className="key">
        //     <div className="major">
        //       {this.state.mode === 'major' ? 'E' : 'c'}
        //       {this.state.mode === 'major' ? null : <span className="accidental">
        //           &#x0266F;
        //         </span>}
        //     </div>
        //   </li>
        //   <li className="key">
        //     <div className="major">
        //       {this.state.mode === 'major' ? 'B' : 'g'}
        //       {this.state.mode === 'major' ? null : <span className="accidental">
        //           &#x0266F;
        //         </span>}
        //     </div>
        //   </li>
        //   <li className="key">
        //     <div className="major">
        //       {this.state.mode === 'major' ? 'G' : 'e'}
        //       {this.state.mode === 'major' ? <span className="accidental">
        //           &#x266d;
        //         </span> : <span className="accidental">&#x0266d;</span>}
        //     </div>
        //   </li>
        //   <li className="key">
        //     <div className="major">
        //       {this.state.mode === 'major' ? 'D' : 'b'}
        //       <span className="accidental">&#x266d;</span>
        //     </div>
        //   </li>
        //   <li className="key">
        //     <div className="major">
        //       {this.state.mode === 'major' ? 'A' : 'f'}
        //       {this.state.mode === 'major' ? <span className="accidental">
        //           &#x266d;
        //         </span> : null}
        //     </div>
        //   </li>
        //   <li className="key">
        //     <div className="major">
        //       {this.state.mode === 'major' ? 'E' : 'c'}
        //       {this.state.mode === 'major' ? <span className="accidental">
        //           &#x266d;
        //         </span> : null}
        //     </div>
        //   </li>
        //   <li className="key">
        //     <div className="major">
        //       {this.state.mode === 'major' ? 'B' : 'g'}
        //       {this.state.mode === 'major' ? <span className="accidental">
        //           &#x266d;
        //         </span> : null}
        //     </div>
        //   </li>
        //   <li className="key">
        //     <div className="major">
        //       {this.state.mode === 'major' ? 'F' : 'd'}
        //     </div>
        //   </li>
        // </ul> */}
      </div>
    );
  };
}

export default CircleOfFifths;
