import React, {Component} from "react";
import Checkbox from "./Checkbox";


const ITEMS = [
    "Item 1",
    "Item 2",
    "Item 3",
    "Item 4",
];

class Checkboxes extends Component {
    // The logic behind the checkboxes

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

    /*
     Handle "item" checkboxes change
     - update the state of the checkbox
     - check if all checkboxes are checked, if so then check the "select all" checkbox
     */
    handleItemCheckboxChange = changeEvent => {
        const {name} = changeEvent.target;

        this.setState(
            prevState => ({
                itemCheckboxes: {
                    ...prevState.itemCheckboxes,
                    [name]: !prevState.itemCheckboxes[name]
                },
                selectAllCheckbox:
                    prevState.selectAllCheckbox |
                    (!prevState.itemCheckboxes[name] &&
                        Object.values(this.state.itemCheckboxes)
                            .filter(isSelected => !isSelected)
                            .length === 1)
            })
        );
    };

    /*
     Handle "select all" checkboxes change
     - check all the "item" checkboxes
     - update the state of the "select all" checkbox
     */
    handleSelectAllCheckboxChange = () => {
        Object.keys(this.state.itemCheckboxes).forEach(name => {
            this.setState(prevState => ({
                itemCheckboxes: {
                    ...prevState.itemCheckboxes,
                    [name]: !prevState.selectAllCheckbox
                }
            }));
        });

        this.setState(prevState => ({
            selectAllCheckbox: !prevState.selectAllCheckbox
        }));
    };

    // The checkboxes rendering

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

    createCheckboxes = () => [this.createSelectAllCheckbox(), ...ITEMS.map(this.createItemCheckbox)];

    render() {
        return (
            <div className="container">
                {this.createCheckboxes()}
            </div>
        );
    }
}

export default Checkboxes;
