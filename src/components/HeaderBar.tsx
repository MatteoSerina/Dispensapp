import React, { useState } from 'react';
import axios from 'axios';
import { RouteComponentProps, withRouter } from 'react-router-dom';

import { Button } from 'primereact/button';
import { Menubar } from 'primereact/menubar';
import { Sidebar } from 'primereact/sidebar';

import 'primereact/resources/primereact.min.css';
import 'primereact/resources/themes/nova-light/theme.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';

export default function HeaderBar(props) {
    const [visibleLeft, setVisibleLeft] = useState(false);

    return (
        <div className="p-formgroup-inline" style={{
            marginTop: '1em', 
            marginBottom: '1em',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
        }}>
            <div className="p-field">
                <Sidebar visible={visibleLeft} baseZIndex={1000000} onHide={() => setVisibleLeft(false)}>
                    <h1 style={{ fontWeight: 'normal', justifyItems:'left' }} onClick={(e) => setVisibleLeft(false)} >Home</h1>
                    <h1 style={{ fontWeight: 'normal' }} onClick={(e) => setVisibleLeft(false)} >Inventario</h1>                    
                </Sidebar>
                <span><Button icon="pi pi-bars" onClick={(e) => setVisibleLeft(true)} style={{ width: '45px', height: '45px' }} /></span>
            </div>

            <div className="p-field p-sr-only" >
                <span style={{ color: '#2196f3', fontSize: '2.5em' }}>DispensApp</span>
            </div>
        </div>
    );
}