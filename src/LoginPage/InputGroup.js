import React from 'react';
import { InputGroup, InputGroupAddon, InputGroupText, Input } from 'reactstrap';

const InputGroupComponent = (props) => {
    return (
        <div className="input-margin">
            <br />
            <InputGroup size="lg">
                <InputGroupAddon addonType="prepend">
                    <InputGroupText>@</InputGroupText>
                </InputGroupAddon>
                <Input placeholder="username" />
            </InputGroup>
            <br />
            <InputGroup size="lg">
                <Input />
                <InputGroupAddon addonType="append">
                    <InputGroupText>@gmail.com</InputGroupText>
                </InputGroupAddon>
            </InputGroup>
        </div>
    );
};

export default InputGroupComponent;
