import React from 'react';
import ReactDOM from 'react-dom';

class Tab extends React.Component {
    constructor(props){
        super(props);
        this.state = { tab: 0 };
        this.changeTab = this.changeTab.bind(this);
    }
    
    changeTab(e){
        if(this.state.tab !== e.currentTarget.id){
            this.setState({tab: e.currentTarget.id});
        }
    }

    render() {
        return (
            <div className="tab">
                <ul className='tabTabs'>
                    { this.props.tabs.map( (ele, i) => {
                        return <li><h2 key={i} id={i} onClick={this.changeTab}>{ele.title}</h2></li>
                    })  }
                </ul>
                <div className="tabs-contents">
                    <p> { this.props.tabs[this.state.tab].content } </p>
                </div>
            </div> 
        )
    }
}

export default Tab;