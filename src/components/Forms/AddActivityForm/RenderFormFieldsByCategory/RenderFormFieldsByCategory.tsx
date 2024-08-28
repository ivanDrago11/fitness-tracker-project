import { Control, FieldValues, UseFormRegister } from 'react-hook-form';
import { ActivityCategoryType } from '../../../types/activityTypes';
import {
    BaseFields,
    CardioFields,
    FlexibilityFields,
    HIITFields,
    SportsFields,
    StrengthFields,
} from './ActivityFields';

interface RenderFormFieldsByCategoryProps {
    register: UseFormRegister<FieldValues>;
    control: Control<FieldValues>;
    activityCategory: ActivityCategoryType;
}
const renderFormFieldsByCategory: React.FC<RenderFormFieldsByCategoryProps> = ({
    register,
    control,
    activityCategory,
}) => {
    switch (activityCategory) {
        case 'cardio':
            return (
                <>
                    <BaseFields register={register} control={control}>
                        <CardioFields register={register} />
                    </BaseFields>
                </>
            );
        case 'strength':
            return (
                <>
                    <BaseFields register={register} control={control}>
                        <StrengthFields register={register} />
                    </BaseFields>
                </>
            );
        case 'flexibility':
            return (
                <>
                    <BaseFields register={register} control={control}>
                        <FlexibilityFields register={register} />
                    </BaseFields>
                </>
            );
        case 'sports':
            return (
                <>
                    <BaseFields register={register} control={control}>
                        <SportsFields register={register} />
                    </BaseFields>
                </>
            );
        case 'hiit':
            return (
                <>
                    <BaseFields register={register} control={control}>
                        <HIITFields register={register} />
                    </BaseFields>
                </>
            );
        default:
            return null;
    }
};

export default renderFormFieldsByCategory;
