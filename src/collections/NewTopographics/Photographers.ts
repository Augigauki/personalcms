import { generateSlug } from "@/util/generateSlug";
import { dashboardGroups } from "@/util/groups";
import { CollectionConfig, FieldHook } from "payload";
import slugify from 'slugify';

/* const generateSlug: FieldHook = async({value, data}) => {
    const slug = slugify(data?.name, {
        lower: true,
    }) ?? value;
    return slug;
} */

export const Photographers: CollectionConfig = {
    slug: 'photographers',
    admin: {
        group: dashboardGroups.newtopo,
        useAsTitle: 'name',
        defaultColumns: ['name'],
    },
    fields: [
        {
            type: 'row',
            fields: [
                {
                    name: 'name',
                    type: 'text',
                    required: true,
                },
                {
                    name: 'slug',
                    type: 'text',
                    hooks: {
                        beforeValidate: [generateSlug],
                    },
                    admin: {
                        readOnly: true,
                    }
                }
            ]
        },
        {
            name: 'about',
            type: 'textarea',
        },
        {
            name: 'links',
            type: 'array',
            fields: [
                {
                    type: 'row',
                    fields: [
                        {
                            name: 'linkTitle',
                            type: 'text',
                        },
                        {
                            name: 'link',
                            type: 'text',
                           /*  validate: ({data}) => {
                                console.log(data);
                                return data?.startsWith('https://');
                            } */
                        }
                    ]
                }
            ],
            admin: {
                /* components: {
                    RowLabel: ({data}: {data: any}) => {
                        return data?.linkTitle || 'Linknavn'
                    }
                } */
            }
        }
    ]
}