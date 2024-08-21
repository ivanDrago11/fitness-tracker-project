import React from 'react';
import styles from './Dropdown.module.scss';

type DropdownProps = {
    isDropdownVisible?: boolean;
};

const Dropdown: React.FC<DropdownProps> = ({ isDropdownVisible }) => {
    return (
        <div
            className={`${styles.dropdown} 
            ${isDropdownVisible ? styles.dropdownVisible : ''}`}
        >
            <div className={styles.dropdownItem}> Add Activity </div>
            <div className={styles.dropdownItem}> Add Goal </div>
        </div>
    );
};

export default Dropdown;
