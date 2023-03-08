// System Definition > Fix Script
//test GlideQuery Create

new GlideQuery('sys_user')
    .insert({
        user_name: 'walt.disney',
        first_name: 'Walt',
        last_name: 'Disney',
        department: '221f3db5c6112284009f4becd3039cc9',
        role: 'admin',
        email: 'walt.disney@example.com',
        phone: '555-1212',
        mobile_phone: '815-1945'
    });

new GlideQuery('sys_user')
    .insert({
        user_name: 'mickey.mouse',
        first_name: 'Mickey',
        last_name: 'Mouse',
        department: '221f3db5c6112284009f4becd3039cc9',
        roles: 'itil',
        email: 'mickey.mouse@example.com',
        phone: '555-2112',
        mobile_phone: '606-1944'
    });

new GlideQuery('sys_user')
    .insert({
        user_name: 'minnie.mouse',
        first_name: 'Minnie',
        last_name: 'Mouse',
        department: '221f3db5c6112284009f4becd3039cc9',
        roles: 'itil',
        email: 'minnie.mouse@example.com',
        phone: '555-1234',
        mobile_phone: '127-1941'
    });
