const source = {
  data: shallowMenu = [
    {
      title: 'Dashboard',
      link: '/dashboard',
      children: [
        {
          title: 'Tool',
          link: '/dashboard/tool'
        },
        {
          title: 'Reports',
          link: '/dashboard/reports'
        },
        {
          title: 'Analytics',
          link: '/dashboard/analytics'
        },
        {
          title: 'Code Blocks',
          link: '/dashboard/code-blocks'
        }
      ]
    },
    {
      title: 'Sales',
      link: '/sales',
      children: [
        {
          title: 'New Sales',
          link: '/sales/new-sales'
        },
        {
          title: 'Expired Sales',
          link: '/sales/expired-sales'
        },
        {
          title: 'Sales Reports',
          link: '/sales/sales-reports'
        },
        {
          title: 'Deliveries',
          link: '/sales/deliveries'
        }
      ]
    },
    {
      title: 'Messages',
      link: '/messages',
      children: [
        {
          title: 'Inbox',
          link: '/messages/inbox'
        },
        {
          title: 'Outbox',
          link: '/messages/outbox'
        },
        {
          title: 'Sent',
          link: '/messages/sent'
        },
        {
          title: 'Archived',
          link: '/messages/archived'
        }
      ]
    },
    {
      title: 'Users',
      link: '/users',
      children: [
        {
          title: 'New User',
          link: '/users/new-user'
        },
        {
          title: 'User Groups',
          link: '/users/user-groups'
        },
        {
          title: 'Permissions',
          link: '/users/permissions'
        },
        {
          title: 'passwords',
          link: '/users/passwords'
        }
      ]
    },
    {
      title: 'Settings',
      link: '/settings',
      children: [
        {
          title: 'Databases',
          link: '/settings/databases'
        },
        {
          title: 'Design',
          link: '/settings/design'
        },
        {
          title: 'Change User',
          link: '/settings/change-user'
        },
        {
          title: 'Log Out',
          link: '/settings/log-out'
        }
      ]
    }
  ]
}

const getMenuItem = function (itemData) {
  const liTag = document.createElement('li');
  const aTag = document.createElement('a');
  aTag.href = '#' + itemData.link;
  aTag.innerHTML = itemData.title;
  liTag.appendChild(aTag);

  if (itemData.children) {
    const ulTag = document.createElement('ul');
    for (let i = 0; i < itemData.children.length; i++) {
      ulTag.appendChild(getMenuItem(itemData.children[i]));
    }
    liTag.appendChild(ulTag);
  }
  return liTag;
}

const menu = document.getElementById('menu');
for (let i = 0; i < source.data.length; i++) {
  menu.appendChild(getMenuItem(source.data[i]));
}
