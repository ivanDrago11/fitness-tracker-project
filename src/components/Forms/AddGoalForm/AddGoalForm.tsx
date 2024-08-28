import React, { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { ActivityDataSchemas } from '../../../types/activityFormSchemas';
import { GoalDataSchemas } from '../../../types/goalFormSchemas';
import {
    ActivityType,
    ActivityCategoryType,
    activityCategories,
    goalCategories,
    GoalUnitType,
    goalUnits,
    GoalType,
} from '../../../types/activityTypes';
import { getDataSchemaType } from '../../../utils/GetDataSchemaType';
// import RenderFormFieldsByCategory from './RenderFormFieldsByCategory/RenderFormFieldsByCategory';
import styles from '../AddActivityGoalForm.module.scss';
import { FormType } from '../../AddActivityGoalButton/AddActivityGoalButton';

interface AddGoalFormProps {
    onSelectForm: (form: FormType) => void;
}
const AddGoalForm: React.FC<AddGoalFormProps> = ({ onSelectForm }) => {
    const [activityType, setActivityType] = useState<ActivityType>('running');
    const [goalType, setGoalType] = useState<GoalType>('Distance Covered');
    const [unitType, setUnitType] = useState<GoalUnitType>('km');

    // get the activity category based on the activity type
    const activityCategory = getDataSchemaType(
        activityType,
    ) as ActivityCategoryType;

    // get the schema type based on the activity type
    const schemaType = getDataSchemaType(
        activityType,
    ) as keyof ActivityDataSchemas;
    type schemaType = typeof schemaType;

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<GoalDataSchemas[schemaType]>();

    // TODO: ADD ERROR HANDLING IN THE FORM
    console.log(errors);

    ////////////////////////////////////////////////////
    //onSubmit handlers
    const onSubmit = (data: GoalDataSchemas[schemaType]) => {
        console.log(data);
    };
    const onSubmitHandler: SubmitHandler<GoalDataSchemas[schemaType]> = (
        data,
    ) => {
        onSubmit(data);
    };

    return (
        <div className={styles['container']}>
            <div className={styles['form-container']}>
                <button
                    className={styles['close-button']}
                    onClick={() => onSelectForm(null)}
                >
                    X
                </button>
                <div className={styles['title-container']}>
                    <h2 className={styles['title']}>Add a new goal</h2>
                </div>
                <form onSubmit={handleSubmit(onSubmitHandler)}>
                    <div className={styles['form-container__form']}>
                        <div>
                            <label htmlFor="">Title:</label>
                            <input type="text" placeholder="Goal name" />
                        </div>
                        <div>
                            <label htmlFor="activityType">Activity Type</label>
                            <select
                                {...register('activityType', {
                                    required: 'Activity type is required',
                                })}
                                onChange={(e) => {
                                    setActivityType(
                                        e.target.value as ActivityType,
                                    );
                                    setGoalType('Calories Burned');
                                    setUnitType('kcal');
                                }}
                            >
                                {/* Render the goal types */}
                                {Object.entries(activityCategories).map(
                                    ([category, activity]) => (
                                        <optgroup
                                            key={category}
                                            label={
                                                category
                                                    .charAt(0)
                                                    .toUpperCase() +
                                                category.slice(1)
                                            }
                                        >
                                            {activity.map((activity) => (
                                                <option
                                                    key={activity}
                                                    value={activity}
                                                >
                                                    {activity
                                                        .replace('_', ' ')
                                                        .charAt(0)
                                                        .toUpperCase() +
                                                        activity
                                                            .replace('_', ' ')
                                                            .slice(1)}
                                                </option>
                                            ))}
                                        </optgroup>
                                    ),
                                )}
                            </select>
                        </div>
                        <div>
                            <label htmlFor="goalType">Goal Type</label>
                            <select
                                {...register('goalType', {
                                    required: 'Activity type is required',
                                })}
                                value={goalType}
                                onChange={(e) => {
                                    setGoalType(e.target.value as GoalType);
                                    setUnitType(
                                        goalUnits[
                                            e.target
                                                .value as keyof typeof goalUnits
                                        ],
                                    );
                                }}
                            >
                                {/* Render the goal types */}

                                {goalCategories[activityCategory].map(
                                    (goal) => (
                                        <option key={goal} value={goal}>
                                            {goal
                                                .replace('_', ' ')
                                                .charAt(0)
                                                .toUpperCase() +
                                                goal.replace('_', ' ').slice(1)}
                                        </option>
                                    ),
                                )}
                            </select>
                        </div>
                        <div>
                            <label htmlFor="targetValue">
                                Target Value ({unitType}) :
                            </label>
                            <input
                                {...register('targetValue', {
                                    required: 'Target value is required',
                                })}
                                type="number"
                                min={0}
                                placeholder="Target Value"
                            />
                        </div>

                        {/* Render the form fields by category */}
                        {/* <RenderFormFieldsByCategory
                            activityCategory={activityCategory}
                            register={
                                register as unknown as UseFormRegister<FieldValues>
                            }
                            control={control as unknown as Control<FieldValues>}
                        /> */}
                    </div>
                    <div className={styles['submit-button-container']}>
                        <button
                            type="submit"
                            className={styles['submit-button']}
                        >
                            SAVE
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddGoalForm;
