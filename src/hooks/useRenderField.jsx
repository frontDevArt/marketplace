import { useCallback } from 'react';

import Dropdown from '@/components/shared/Dropdown';
import Input from '@/components/shared/Input';

const useRenderField = ({ formState, errors, handleChange }) => {
  return useCallback(
    (field) => {
      const { fieldName, type, options, label = '', required } = field;
      const value = formState[fieldName]?.value || '';
      switch (type) {
        case 'text':
        case 'textarea':
        case 'number':
          return (
            <Input
              withStar={field?.validation?.required}
              required={field?.validation?.required}
              style={{ height: 54 }}
              key={fieldName}
              label={label}
              value={value}
              error={errors[fieldName]}
              name={fieldName}
              type={type === 'number' ? 'number' : 'text'}
              onChange={handleChange}
              placeholder={`Enter ${fieldName}`}
              animatedPlaceholder
            />
          );

        case 'radio':
        case 'select':
          return (
            <Dropdown
              withStar={field?.validation?.required}
              required={field?.validation?.required}
              height={54}
              label={label}
              key={fieldName}
              options={options}
              onSelect={(option) => handleChange({ target: { name: fieldName, value: option.value } })}
              selectedOption={options?.[0]}
              isOutsideClickEnabled
            />
          );

        case 'file':
          return (
            <Input
              key={fieldName}
              label={fieldName}
              type="file"
              name={fieldName}
              onChange={handleChange}
              required={required}
              error={errors[fieldName]}
            />
          );

        default:
          return null;
      }
    },
    [formState, errors, handleChange]
  );
};

export default useRenderField;
