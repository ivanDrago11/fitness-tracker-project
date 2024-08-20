import React, { useState } from 'react';
import styles from './AddActivityGoalButton.module.scss';
import AddIcon from '@mui/icons-material/Add';
import Dropdown from '../Dropdown/Dropdown';
interface AddActivityGoalButtonProps {
    className?: string;
}

const AddActivityGoalButton: React.FC<AddActivityGoalButtonProps> = ({
    className,
}) => {
    const [isDropdownVisible, setIsDropdownVisible] = useState(false);

    return (
        <div className={className}>
            <button
                className={styles.container}
                onClick={() => setIsDropdownVisible(!isDropdownVisible)}
            >
                <AddIcon className={styles.icon} />
                <div className={styles.text}> Add Activity Goal </div>
                <Dropdown isDropdownVisible={isDropdownVisible} />
            </button>
        </div>
    );
};

export default AddActivityGoalButton;
