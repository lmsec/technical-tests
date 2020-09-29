import React, {Component} from "react";
import Checkbox from "./Checkbox";


const ITEMS = [
    "Item 1",
    "Item 2",
    "Item 3",
    "Item 4",
];

class App extends Component {
    state = {
        itemCheckboxes: ITEMS.reduce(
            (options, option) => ({
                ...options,
                [option]: false
            }),
            {}
        ),
        selectAllCheckbox: false
    };

    handleItemCheckboxChange = changeEvent => {
        const {name} = changeEvent.target;

        console.log(changeEvent.target);
        this.setState(prevState => ({
            itemCheckboxes: {
                ...prevState.itemCheckboxes,
                [name]: !prevState.itemCheckboxes[name]
            }
        }));
    };

    handleSelectAllCheckboxChange = () => {
        Object.keys(this.state.itemCheckboxes).forEach(itemCheckbox => {
            this.setState(prevState => ({
                itemCheckboxes: {
                    ...prevState.itemCheckboxes,
                    [itemCheckbox]: !prevState.selectAllCheckbox
                }
            }));
        });

        this.setState(prevState => ({
            selectAllCheckbox: !prevState.selectAllCheckbox
        }));
    };

    createItemCheckbox = name => (
        <Checkbox
            label={name}
            isSelected={this.state.itemCheckboxes[name]}
            onCheckboxChange={this.handleItemCheckboxChange}
            key={name}
        />
    );

    createSelectAllCheckbox = () => (
        <Checkbox
            label={"Select all"}
            isSelected={this.state.selectAllCheckbox}
            onCheckboxChange={this.handleSelectAllCheckboxChange}
            key={"selectAll"}
        />
    );

    createCheckboxes = () => [...ITEMS.map(this.createItemCheckbox), this.createSelectAllCheckbox()];

    render() {
        return (
            <div className="container">
                        {this.createCheckboxes()}
            </div>
        );
    }
}

export default App;
