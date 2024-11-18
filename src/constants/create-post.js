import { EMAIL_PATTERN } from '@/modules/auth/AuthLayout/constants';

export const POST_TYPES = {
  Items: {
    categoryName: 'items',
    subcategories: {
      'Antiques & Collectibles': {
        name: 'Antiques & Collectibles',
        generalInformation: {
          label: 'General Information',
          fields: [
            {
              fieldName: 'postTitle',
              type: 'text',
              validation: {
                required: true,
                min: 1,
              },
            },
            {
              fieldName: 'price',
              type: 'number',
              validation: {
                min: 1,
              },
            },
            {
              fieldName: 'condition',
              type: 'radio',
              validation: {
                required: true,
              },
              options: [
                {
                  label: 'New',
                  name: 'new',
                },
                {
                  label: 'usedLikedNew',
                  name: 'Used (Like new)',
                },
                {
                  label: 'usedGood',
                  name: 'Used (Good)',
                },
                {
                  label: 'usedFair',
                  name: 'Used (Fair)',
                },
              ],
            },
            {
              fieldName: 'description',
              type: 'textarea',
              validation: {
                required: true,
                min: 1,
              },
            },
            {
              fieldName: 'subcategory',
              type: 'select',
              validation: {
                required: true,
              },
              options: 'dynamic',
            },
            {
              fieldName: 'pictures',
              type: 'file',
              validation: {
                required: true,
                maxCount: 5,
              },
            },
            {
              fieldName: 'location',
              type: 'select',
              validation: {
                required: true,
              },
              options: 'dynamic',
            },
          ],
        },
        contactInfo: {
          label: 'Contact Information',
          fields: [
            {
              fieldName: 'email',
              type: 'email',
              validation: {
                required: true,
                pattern: EMAIL_PATTERN,
              },
            },
            {
              fieldName: 'phoneNumber',
              type: 'number',
              maxCount: 2,
              requiredFirst: true,
              validation: {
                min: 5,
                isNumber: true,
              },
            },
            {
              fieldName: 'webAndSocial',
              type: 'text',
              maxCount: 2,
              requiredFirst: true,
              validation: {
                min: 5,
              },
            },
          ],
        },
      },
    },
  },
};
