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

    selectAll = isSelected => {
        Object.keys(this.state.itemCheckboxes).forEach(name => {
            this.setState(prevState => ({
                itemCheckboxes: {
                    ...prevState.itemCheckboxes,
                    [name]: isSelected
                }
            }));
        });

        this.setState(() => ({
            selectAllCheckbox: isSelected
        }));
    };

    handleItemCheckboxChange = changeEvent => {
        const {name} = changeEvent.target;

        console.log(changeEvent.target);
        this.setState(
            prevState => ({
                itemCheckboxes: {
                    ...prevState.itemCheckboxes,
                    [name]: !prevState.itemCheckboxes[name]
                }
            }),
            () => {
                if (Object.keys(this.state.itemCheckboxes)
                    .filter(name => !this.state.itemCheckboxes[name])
                    .length === 0) {
                    this.selectAll(true);
                }
            }
        );
    };

    handleSelectAllCheckboxChange = () =>
        this.selectAll(!this.state.selectAllCheckbox);

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

export default App;
