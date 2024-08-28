import React, { useState } from 'react';
import {
    useForm,
    SubmitHandler,
    UseFormRegister,
    FieldValues,
    Control,
} from 'react-hook-form';
import { ActivityDataSchemas } from '../../../types/activityFormSchemas';
import {
    ActivityType,
    ActivityCategoryType,
    activityCategories,
} from '../../../types/activityTypes';
import { getDataSchemaType } from '../../../utils/GetDataSchemaType';
import RenderFormFieldsByCategory from './RenderFormFieldsByCategory/RenderFormFieldsByCategory';
import styles from '../AddActivityGoalForm.module.scss';
import { FormType } from '../../AddActivityGoalButton/AddActivityGoalButton';

interface AddActivityFormProps {
    onSelectForm: (form: FormType) => void;
}
const AddActivityForm: React.FC<AddActivityFormProps> = ({ onSelectForm }) => {
    const [activityType, setActivityType] = useState<ActivityType>('running');
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
        control,
        formState: { errors },
    } = useForm<ActivityDataSchemas[schemaType]>();

    // TODO: ADD ERROR HANDLING IN THE FORM
    console.log(errors);

    ////////////////////////////////////////////////////
    //onSubmit handlers
    const onSubmit = (data: ActivityDataSchemas[schemaType]) => {
        console.log(data);
    };
    const onSubmitHandler: SubmitHandler<ActivityDataSchemas[schemaType]> = (
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
                    <h2 className={styles['title']}>Add a new activity</h2>
                </div>
                <form onSubmit={handleSubmit(onSubmitHandler)}>
                    <div className={styles['form-container__form']}>
                        <div>
                            <label htmlFor="activityType">Activity Type</label>
                            <select
                                {...register('activityType', {
                                    required: 'Activity type is required',
                                })}
                                onChange={(e) =>
                                    setActivityType(
                                        e.target.value as ActivityType,
                                    )
                                }
                            >
                                {/* Render the activity types */}
                                {Object.entries(activityCategories).map(
                                    ([category, activities]) => (
                                        <optgroup
                                            key={category}
                                            label={
                                                category
                                                    .charAt(0)
                                                    .toUpperCase() +
                                                category.slice(1)
                                            }
                                        >
                                            {activities.map((activity) => (
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
                        {/* Render the form fields by category */}
                        <RenderFormFieldsByCategory
                            activityCategory={activityCategory}
                            register={
                                register as unknown as UseFormRegister<FieldValues>
                            }
                            control={control as unknown as Control<FieldValues>}
                        />
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

export default AddActivityForm;
