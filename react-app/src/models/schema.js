export const schema = {
    'models': {
        'Products': {
            'name': 'Products',
            'fields': {
                'id': {
                    'name': 'id',
                    'isArray': false,
                    'type': 'ID',
                    'isRequired': true,
                    'attributes': []
                },
                'name': {
                    'name': 'name',
                    'isArray': false,
                    'type': 'String',
                    'isRequired': false,
                    'attributes': []
                },
                'description': {
                    'name': 'description',
                    'isArray': false,
                    'type': 'String',
                    'isRequired': false,
                    'attributes': []
                },
                'quantity': {
                    'name': 'quantity',
                    'isArray': false,
                    'type': 'Int',
                    'isRequired': false,
                    'attributes': []
                }
            },
            'syncable': true,
            'pluralName': 'Products',
            'attributes': [
                {
                    'type': 'model',
                    'properties': {}
                },
                {
                    'type': 'auth',
                    'properties': {
                        'rules': [
                            {
                                'allow': 'public'
                            }
                        ]
                    }
                }
            ]
        }
    },
    'enums': {},
    'nonModels': {},
    'version': 'c77d3a4a46ba4a4a2970523409793c51'
};