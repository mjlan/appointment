import React, { Component, ReactDOM } from 'react';
import PropTypes from 'prop-types';
import { Button, WhiteSpace, WingBlank } from 'antd-mobile';
import template from './temp/template';

class Index extends Component {
    constructor() {
        super();
        this.state = {
            "info": {
                "title": "",
                "name": "",
                "author": "",
                "license": "",
                "Github": "",
                "npm": ""
            }
        }
    }
    render() {

        let { GetInitData } = this.props;
        let info = this.state.info;
        if (GetInitData.get('initData') != undefined) {
            info = GetInitData.get('initData').info;
            // redux 数据 传递测试
            console.log(info)
        }


        return (
            <div id='IndexComp'>
                <div className="comt">
                    <div className="clearfloat">
                        <div className="logo"></div>
                        <h2 className="title">demo</h2>
                    </div>
                    <div className="git">
                        <Button>default</Button><WhiteSpace />
                        <Button disabled>default disabled</Button><WhiteSpace />

                        <Button type="primary">primary</Button><WhiteSpace />
                        <Button type="primary" disabled>primary disabled</Button><WhiteSpace />

                        <Button type="warning">warning</Button><WhiteSpace />
                        <Button type="warning" disabled>warning disabled</Button><WhiteSpace />

                        <Button loading>loading button</Button><WhiteSpace />
                        <Button icon="check-circle-o">with icon</Button><WhiteSpace />
                        <Button icon={<img src="https://gw.alipayobjects.com/zos/rmsportal/jBfVSpDwPbitsABtDDlB.svg" alt="" />}>with custom icon</Button><WhiteSpace />
                        <Button icon="check-circle-o" inline size="small" style={{ marginRight: '4px' }}>with icon and inline</Button>
                        <Button icon="check-circle-o" inline size="small">with icon and inline</Button>
                        <WhiteSpace />

                        {/* <Button activeStyle={false}>无点击反馈</Button><WhiteSpace /> */}
                        {/* <Button activeStyle={{ backgroundColor: 'red' }}>custom feedback style</Button><WhiteSpace /> */}

                        <WhiteSpace />
                        <Button type="primary" inline style={{ marginRight: '4px' }}>inline primary</Button>
                        {/* use `am-button-borderfix`. because Multiple buttons inline arranged, the last one border-right may not display */}
                        <Button type="ghost" inline style={{ marginRight: '4px' }} className="am-button-borderfix">inline ghost</Button>

                        <WhiteSpace />
                        <Button type="primary" inline size="small" style={{ marginRight: '4px' }}>primary</Button>
                        <Button type="primary" inline size="small" disabled>primary disabled</Button>
                        <WhiteSpace />
                        <Button type="ghost" inline size="small" style={{ marginRight: '4px' }}>ghost</Button>
                        {/* use `am-button-borderfix`. because Multiple buttons inline arranged, the last one border-right may not display */}
                        <Button type="ghost" inline size="small" className="am-button-borderfix" disabled>ghost disabled</Button>
                    </div>
                </div>

            </div>
        )
    }
}
Index.propTypes = {
    GetInitData: PropTypes.object
};
export default template({
    id: 'index',
    url: '/getData',
    data: {},
    subscribeData: ['GetInitData'],
    component: Index
})
