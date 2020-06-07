import * as React from 'react';
import axios from 'axios';
import { RouteComponentProps, withRouter } from 'react-router-dom';

import { Button } from 'primereact/button';

import 'primereact/resources/primereact.min.css';
import 'primereact/resources/themes/nova-light/theme.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';

export default function PlusMinus(props) {
    return (
        <div className="p-fluid">
            <div className="p-field">
                <Button tooltip="Aggiungi" className="p-button-success p-button-raised" icon="pi pi-plus" style={{ width: '21em', height: '21em' }} />
            </div>
            <div className="p-field">
                <Button tooltip="Rimuovi" className="p-button-danger p-button-raised" icon="pi pi-minus" style={{ width: '21em', height: '21em' }} />
            </div>
        </div>
    );
}