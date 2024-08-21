import React, { useRef, useState } from 'react';
import styles from './AddActivityGoalButton.module.scss';
import AddIcon from '@mui/icons-material/Add';
import Dropdown from '../Dropdown/Dropdown';
import { useClickOutside } from '../../utils/HandleClickOutside';
interface AddActivityGoalButtonProps {
    className?: string;
}

const AddActivityGoalButton: React.FC<AddActivityGoalButtonProps> = ({
    className,
}) => {
    const [isDropdownVisible, setIsDropdownVisible] = useState(false);
    const containerRef = useRef<HTMLButtonElement>(null);

    useClickOutside(containerRef, () => setIsDropdownVisible(false));

    return (
        <div className={className}>
            <button
                className={`
                ${styles['button-container']} ${
                    isDropdownVisible ? styles['button-container--active'] : ''
                }`}
                onClick={() => setIsDropdownVisible(!isDropdownVisible)}
                ref={containerRef}
            >
                <AddIcon className={styles['button-container__icon']} />
                <div className={styles['button-container__text']}>
                    Add Activity Goal
                </div>
                <Dropdown isDropdownVisible={isDropdownVisible} />
            </button>
        </div>
    );
};

export default AddActivityGoalButton;
