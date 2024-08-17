export const wpConstants = [
  {
    category: 'Admin',
    constants: [
      {
        constant: 'IS_PROFILE_PAGE',
        description:
          'Determined if you are on profile edit page in admin panel',
        defaultValue: 'Not set',
        possibleValues: ['true'],
      },
      {
        constant: 'WP_ADMIN',
        description: 'Will be defined if you are in the WordPress admin panel',
        defaultValue: 'Not set',
        possibleValues: ['true'],
      },
      {
        constant: 'WP_BLOG_ADMIN',
        description: 'Will be defined if you are running a query in /wp-admin/',
        defaultValue: 'Not set',
        possibleValues: ['true'],
      },
      {
        constant: 'WP_USER_ADMIN',
        description: 'Defined on pages: /wp-admin/user/',
        defaultValue: 'Not set',
        possibleValues: ['true'],
      },
    ],
  },
  {
    category: 'Content Management',
    constants: [
      {
        constant: 'AUTOSAVE_INTERVAL',
        description: 'Interval of autosave posts on editing',
        defaultValue: '60',
        possibleValues: ['Time in seconds'],
      },
      {
        constant: 'DOING_AUTOSAVE',
        description: 'Determined when auto-saving a record',
        defaultValue: 'Not set',
        possibleValues: ['true'],
      },
      {
        constant: 'EMPTY_TRASH_DAYS',
        description:
          'Number of days before an entry is deleted from the Recycle Bin',
        defaultValue: '30',
        possibleValues: ['Number', 'false'],
      },
      {
        constant: 'WP_POST_REVISIONS',
        description: 'Revisions records',
        defaultValue: 'true',
        possibleValues: ['true', 'false', 'Number'],
      },
    ],
  },
  {
    category: 'Cookies',
    constants: [
      {
        constant: 'ADMIN_COOKIE_PATH',
        description: 'Path to directory /wp-admin/',
        defaultValue:
          'SITECOOKIEPATH wp-admin Or for Multisite subdirectory SITECOOKIEPATH',
        possibleValues: ['Path'],
      },
      {
        constant: 'AUTH_COOKIE',
        description: 'Name of authorization cookie',
        defaultValue: 'wordpress_ COOKIEHASH',
        possibleValues: ['Cookie name'],
      },
      {
        constant: 'COOKIEHASH',
        description: 'Hash for generating cookie names',
        defaultValue: 'Not set',
        possibleValues: ['Hash'],
      },
      {
        constant: 'COOKIEPATH',
        description: 'The path to the WordPress root directory',
        defaultValue: 'Home URL without http(s)://',
        possibleValues: ['Path'],
      },
      {
        constant: 'COOKIE_DOMAIN',
        description:
          'The domain that will be used in setcookie() and for which cookies will be set',
        defaultValue: 'false',
        possibleValues: ['Domain'],
      },
      {
        constant: 'LOGGED_IN_COOKIE',
        description: 'Name Cookie for authentication',
        defaultValue: 'wordpress_logged_in_ COOKIEHASH',
        possibleValues: ['Cookie name'],
      },
      {
        constant: 'PASS_COOKIE',
        description: 'Cookie name for the password',
        defaultValue: 'wordpresspass_ COOKIEHASH',
        possibleValues: ['Cookie name'],
      },
      {
        constant: 'PLUGINS_COOKIE_PATH',
        description: 'Path to plugins directory',
        defaultValue: 'WP_PLUGIN_URL without http(s)://',
        possibleValues: ['Path'],
      },
      {
        constant: 'SECURE_AUTH_COOKIE',
        description: 'Cookie name for SSL authorization',
        defaultValue: 'wordpress_sec_ COOKIEHASH',
        possibleValues: ['Cookie name'],
      },
      {
        constant: 'SITECOOKIEPATH',
        description: 'The path to the site',
        defaultValue: 'Site URL without http(s)://',
        possibleValues: ['Path'],
      },
      {
        constant: 'TEST_COOKIE',
        description: 'Cookie name for the test cookie',
        defaultValue: 'wordpress_test_cookie',
        possibleValues: ['Cookie name'],
      },
      {
        constant: 'USER_COOKIE',
        description: 'The cookie name for users',
        defaultValue: 'wordpressuser_ COOKIEHASH',
        possibleValues: ['Cookie name'],
      },
    ],
  },
  {
    category: 'Core',
    constants: [
      {
        constant: 'SHORTINIT',
        description: 'Stops the loading of the main part of WordPress',
        defaultValue: 'Not set',
        possibleValues: ['true'],
      },
    ],
  },
  {
    category: 'Cron',
    constants: [
      {
        constant: 'ALTERNATE_WP_CRON',
        description: 'Uses an alternative Cron system',
        defaultValue: 'false',
        possibleValues: ['true', 'false'],
      },
      {
        constant: 'DISABLE_WP_CRON',
        description: 'Deactivates the cron (job scheduler) in WordPress',
        defaultValue: 'Not set',
        possibleValues: ['true'],
      },
      {
        constant: 'DOING_CRON',
        description: 'Determined if cron task (scheduled task) is executed',
        defaultValue: 'Not set',
        possibleValues: ['true'],
      },
      {
        constant: 'WP_CRON_LOCK_TIMEOUT',
        description:
          'Sets the minimum time interval, between the execution of cron requests',
        defaultValue: '60',
        possibleValues: ['Seconds'],
      },
    ],
  },
  {
    category: 'Database',
    constants: [
      {
        constant: 'CUSTOM_USER_META_TABLE',
        description: 'Lets you define your own "user meta" table',
        defaultValue: 'Not set',
        possibleValues: ['Table name'],
      },
      {
        constant: 'CUSTOM_USER_TABLE',
        description: 'Allows you to define your own "user" table',
        defaultValue: 'Not set',
        possibleValues: ['Table name'],
      },
      {
        constant: 'DB_CHARSET',
        description: 'Defines the encoding (charset) of the database',
        defaultValue: 'utf8',
        possibleValues: ['Charset'],
      },
      {
        constant: 'DB_COLLATE',
        description: 'Defines the collation type for the database',
        defaultValue: 'utf8_general_ci',
        possibleValues: ['Collation'],
      },
      {
        constant: 'DB_HOST',
        description: 'Defines database host',
        defaultValue: 'localhost',
        possibleValues: ['Hostname'],
      },
      {
        constant: 'DB_NAME',
        description: 'Specifies database name',
        defaultValue: 'Not set',
        possibleValues: ['Database name'],
      },
      {
        constant: 'DB_PASSWORD',
        description: 'Defines database password',
        defaultValue: 'Not set',
        possibleValues: ['Password'],
      },
      {
        constant: 'DB_USER',
        description: 'Identifies database user',
        defaultValue: 'Not set',
        possibleValues: ['Username'],
      },
      {
        constant: 'WP_ALLOW_REPAIR',
        description:
          'Allows automatic rebuilding and optimization of database tables',
        defaultValue: 'Not set',
        possibleValues: ['true'],
      },
    ],
  },
  {
    category: 'Debugging',
    constants: [
      {
        constant: 'DIEONDBERROR',
        description: 'If defined, database errors will be displayed',
        defaultValue: 'Not set',
        possibleValues: ['true'],
      },
      {
        constant: 'ERRORLOGFILE',
        description:
          'If defined, the database errors will be written to the log file',
        defaultValue: 'Not set',
        possibleValues: ['Path'],
      },
      {
        constant: 'SAVEQUERIES',
        description: 'Enables or disables writing database queries to an array',
        defaultValue: 'Not set',
        possibleValues: ['true', 'false'],
      },
      {
        constant: 'SCRIPT_DEBUG',
        description:
          'Enables or disables loading of packed CSS and JavaScript files',
        defaultValue: 'Not set',
        possibleValues: ['true', 'false'],
      },
      {
        constant: 'WP_DEBUG',
        description: 'Enables or disables WordPress debug mode',
        defaultValue: 'false',
        possibleValues: ['true', 'false'],
      },
      {
        constant: 'WP_DEBUG_DISPLAY',
        description: 'Enables or disables error output to the screen',
        defaultValue: 'true',
        possibleValues: ['true', 'false', 'null'],
      },
      {
        constant: 'WP_DEBUG_LOG',
        description:
          'Enables or disables error logging to file /wp-content/debug.log',
        defaultValue: 'false',
        possibleValues: ['true', 'false'],
      },
      {
        constant: 'WP_SANDBOX_SCRAPING',
        description: 'Disables fatal error handling',
        defaultValue: 'Not set',
        possibleValues: ['true'],
      },
    ],
  },
  {
    category: 'Development',
    constants: [
      {
        constant: 'WP_LOCAL_DEV',
        description:
          'Not a WordPress constant - often used to enable additional functionality when defined',
        defaultValue: 'Not set',
        possibleValues: ['true'],
      },
    ],
  },
  {
    category: 'Email',
    constants: [
      {
        constant: 'WP_MAIL_INTERVAL',
        description:
          'Specifies the time interval during which only one mail request can be executed',
        defaultValue: '300',
        possibleValues: ['Seconds'],
      },
    ],
  },
  {
    category: 'Environment',
    constants: [
      {
        constant: 'WP_ENVIRONMENT_TYPE',
        description: 'Defines the current development environment',
        defaultValue: 'production',
        possibleValues: ['local', 'development', 'staging', 'production'],
      },
    ],
  },
  {
    category: 'File System',
    constants: [
      {
        constant: 'FS_CHMOD_DIR',
        description: 'Defines access rights for directories',
        defaultValue: '0755',
        possibleValues: ['Octal'],
      },
      {
        constant: 'FS_CHMOD_FILE',
        description: 'Defines access rights for files',
        defaultValue: '0644',
        possibleValues: ['Octal'],
      },
      {
        constant: 'FS_CONNECT_TIMEOUT',
        description: 'Specifies the timeout to create a connection',
        defaultValue: '30',
        possibleValues: ['Seconds'],
      },
      {
        constant: 'FS_METHOD',
        description: 'Specifies how to connect to the file system',
        defaultValue: 'Not set',
        possibleValues: ['direct', 'ssh', 'ftpext', 'ftpsockets'],
      },
      {
        constant: 'FS_TIMEOUT',
        description: 'Defines timeout after a connection loss',
        defaultValue: '30',
        possibleValues: ['Seconds'],
      },
      {
        constant: 'FTP_BASE',
        description: 'Path to WordPress root directory',
        defaultValue: 'ABSPATH',
        possibleValues: ['Path'],
      },
      {
        constant: 'FTP_CONTENT_DIR',
        description: 'Directory path /wp-content/',
        defaultValue: 'WP_CONTENT_DIR',
        possibleValues: ['Path'],
      },
      {
        constant: 'FTP_HOST',
        description: 'Specifies a host for FTP',
        defaultValue: 'Not set',
        possibleValues: ['Hostname'],
      },
      {
        constant: 'FTP_LANG_DIR',
        description: 'Path to directory of language files',
        defaultValue: 'WP_LANG_DIR',
        possibleValues: ['Path'],
      },
      {
        constant: 'FTP_PASS',
        description: 'Specifies the password for FTP',
        defaultValue: 'Not set',
        possibleValues: ['Password'],
      },
      {
        constant: 'FTP_PLUGIN_DIR',
        description: 'Path to plugins directory',
        defaultValue: 'WP_PLUGIN_DIR',
        possibleValues: ['Path'],
      },
      {
        constant: 'FTP_PRIKEY',
        description: 'Specifies private key for SSH',
        defaultValue: 'Not set',
        possibleValues: ['Path'],
      },
      {
        constant: 'FTP_PUBKEY',
        description: 'Specifies public key for SSH',
        defaultValue: 'Not set',
        possibleValues: ['Path'],
      },
      {
        constant: 'FTP_SSH',
        description: 'Turns SSH on or off',
        defaultValue: 'Not set',
        possibleValues: ['true', 'false'],
      },
      {
        constant: 'FTP_SSL',
        description: 'Turns SSL on or off',
        defaultValue: 'Not set',
        possibleValues: ['true', 'false'],
      },
      {
        constant: 'FTP_USER',
        description: 'Specifies a username for FTP',
        defaultValue: 'Not set',
        possibleValues: ['Username'],
      },
      {
        constant: 'UPLOADS',
        description:
          'The path to the site-specific upload directory depends on ABSPATH',
        defaultValue: 'UPLOADBLOGSDIR /{blogid}/files/',
        possibleValues: ['Path'],
      },
    ],
  },
  {
    category: 'Import',
    constants: [
      {
        constant: 'WP_IMPORTING',
        description: 'Defined when you are importing WordPress data',
        defaultValue: 'Not set',
        possibleValues: ['true'],
      },
      {
        constant: 'WP_LOAD_IMPORTERS',
        description:
          'Defined in import review in control panel (Tools -> Importer)',
        defaultValue: 'Not set',
        possibleValues: ['true'],
      },
    ],
  },
  {
    category: 'Installation',
    constants: [
      {
        constant: 'WP_INSTALLING',
        description: 'Will be defined, during a new installation or upgrade',
        defaultValue: 'Not set',
        possibleValues: ['true'],
      },
      {
        constant: 'WP_SETUP_CONFIG',
        description: 'Defined during WP installation or configuration',
        defaultValue: 'Not set',
        possibleValues: ['true'],
      },
    ],
  },
  {
    category: 'Localization',
    constants: [
      {
        constant: 'WP_LANG_DIR',
        description:
          'The absolute path to the directory with the language files',
        defaultValue:
          "WP_CONTENT_DIR . '/languages' Or ABSPATH . WPINC . '/languages'",
        possibleValues: ['Path'],
      },
      {
        constant: 'WPLANG',
        description:
          'Deprecated since WP 4.0. Defines the WordPress localization code',
        defaultValue: '',
        possibleValues: ['Language code'],
      },
    ],
  },
  {
    category: 'Maintenance',
    constants: [
      {
        constant: 'WP_REPAIRING',
        description: 'Defined on page: /wp-admin/maint/repair.php',
        defaultValue: 'Not set',
        possibleValues: ['true'],
      },
    ],
  },
  {
    category: 'Media',
    constants: [
      {
        constant: 'IMAGE_EDIT_OVERWRITE',
        description: 'Controls image edit behavior',
        defaultValue: 'Not set',
        possibleValues: ['true', 'false'],
      },
      {
        constant: 'MEDIA_TRASH',
        description: '"Recycle Bin" functionality for media files',
        defaultValue: 'false',
        possibleValues: ['true', 'false'],
      },
    ],
  },
  {
    category: 'Multisite',
    constants: [
      {
        constant: 'ALLOW_SUBDIRECTORY_INSTALL',
        description:
          'Allows you to install Multisite in a subdirectory (subdomain)',
        defaultValue: 'Not set',
        possibleValues: ['true'],
      },
      {
        constant: 'BLOGUPLOADDIR',
        description:
          'The absolute path to the "upload" directory of a particular blog',
        defaultValue: 'WP_CONTENT_DIR /blogs.dir/{ID блога}/files/',
        possibleValues: ['Path'],
      },
      {
        constant: 'BLOG_ID_CURRENT_SITE',
        description: 'The blog ID of the main site',
        defaultValue: '1',
        possibleValues: ['Number'],
      },
      {
        constant: 'DOMAIN_CURRENT_SITE',
        description: 'The domain of the main site',
        defaultValue: 'domain',
        possibleValues: ['Domain'],
      },
      {
        constant: 'MULTISITE',
        description: 'Will be defined if Multi-site mode is used',
        defaultValue: 'Not set',
        possibleValues: ['true'],
      },
      {
        constant: 'NOBLOGREDIRECT',
        description:
          'Specifies the site URL to which WordPress will redirect requests if the registration is closed or the site does not exist',
        defaultValue: 'Not set',
        possibleValues: ['URL'],
      },
      {
        constant: 'PATH_CURRENT_SITE',
        description: 'The path to the main site',
        defaultValue: 'Not set',
        possibleValues: ['Path'],
      },
      {
        constant: 'SITE_ID_CURRENT_SITE',
        description: 'Network ID of the main site',
        defaultValue: '1',
        possibleValues: ['Number'],
      },
      {
        constant: 'SUBDOMAIN_INSTALL',
        description:
          'Determines whether the installation goes to a subdomain or not',
        defaultValue: 'Not set',
        possibleValues: ['true', 'false'],
      },
      {
        constant: 'SUNRISE',
        description:
          'If defined, WordPress will upload the file /wp-content/sunrise.php',
        defaultValue: 'Not set',
        possibleValues: ['true'],
      },
      {
        constant: 'UPLOADBLOGSDIR',
        description:
          'The path to the underlying upload directory, depending on ABSPATH',
        defaultValue: 'wp-content/blogs.dir',
        possibleValues: ['Path'],
      },
      {
        constant: 'WP_ALLOW_MULTISITE',
        description: 'If defined, the Multi-Site feature is available',
        defaultValue: 'Not set',
        possibleValues: ['true'],
      },
      {
        constant: 'WP_INSTALLING_NETWORK',
        description:
          'To be determined when installing the network or when querying the network admin',
        defaultValue: 'Not set',
        possibleValues: ['true'],
      },
      {
        constant: 'WP_NETWORK_ADMIN',
        description: 'Defined in page: /wp-admin/network/',
        defaultValue: 'Not set',
        possibleValues: ['true'],
      },
      {
        constant: 'WPMU_ACCEL_REDIRECT',
        description: 'Enables or disables support for X-Sendfile Header',
        defaultValue: 'false',
        possibleValues: ['true', 'false'],
      },
      {
        constant: 'WPMU_SENDFILE',
        description: 'Enables or disables support for X-Accel-Redirect Header',
        defaultValue: 'false',
        possibleValues: ['true', 'false'],
      },
    ],
  },
  {
    category: 'Paths',
    constants: [
      {
        constant: 'ABSPATH',
        description:
          'The path to the WordPress root directory with a slash at the end',
        defaultValue: 'path to the directory with the file wp-load.php',
        possibleValues: ['Path'],
      },
      {
        constant: 'WP_CONTENT_DIR',
        description: 'Absolute path to wp-content directory',
        defaultValue: 'ABSPATH/wp-content',
        possibleValues: ['Path'],
      },
      {
        constant: 'WP_CONTENT_URL',
        description: 'URL to the wp-content directory',
        defaultValue: '{URL сайта}/wp-content',
        possibleValues: ['URL'],
      },
      {
        constant: 'WP_PLUGIN_DIR',
        description: 'Absolute path to plugins directory',
        defaultValue: "WP_CONTENT_DIR . '/plugins'",
        possibleValues: ['Path'],
      },
      {
        constant: 'WP_PLUGIN_URL',
        description: 'URL of the plugins directory',
        defaultValue: "WP_CONTENT_URL . '/plugins'",
        possibleValues: ['URL'],
      },
      {
        constant: 'WP_TEMP_DIR',
        description: 'The absolute path to the directory for temporary files',
        defaultValue: 'Not set',
        possibleValues: ['Path'],
      },
      {
        constant: 'WPINC',
        description: 'Name of the directory wp-includes',
        defaultValue: 'wp-includes',
        possibleValues: ['Not set'],
      },
      {
        constant: 'WPMU_PLUGIN_DIR',
        description:
          'The absolute path to the directory of plugins like "Must Use Plugins"',
        defaultValue: 'WP_CONTENT_DIR/mu-plugins',
        possibleValues: ['Path'],
      },
      {
        constant: 'WPMU_PLUGIN_URL',
        description: 'URL of the plugins directory of type "Must Use Plugins"',
        defaultValue: 'WP_CONTENT_URL /mu-plugins',
        possibleValues: ['URL'],
      },
    ],
  },
  {
    category: 'Performance',
    constants: [
      {
        constant: 'COMPRESS_CSS',
        description: 'Enables/disables stylesheet compression (stylesheets)',
        defaultValue: 'Not set',
        possibleValues: ['true', 'false'],
      },
      {
        constant: 'COMPRESS_SCRIPTS',
        description: 'Enables / disables compression of JavaScript files',
        defaultValue: 'Not set',
        possibleValues: ['true', 'false'],
      },
      {
        constant: 'CONCATENATE_SCRIPTS',
        description:
          'Enables/disables compression of JavaScript or CSS files before compression',
        defaultValue: 'Not set',
        possibleValues: ['true', 'false'],
      },
      {
        constant: 'ENFORCE_GZIP',
        description: 'Enables/disables gzip compression',
        defaultValue: 'Not set',
        possibleValues: ['true', 'false'],
      },
      {
        constant: 'WP_CACHE',
        description:
          'If defined, WordPress will try to load the /wp-content/advanced-cache.php file',
        defaultValue: 'false',
        possibleValues: ['true', 'false'],
      },
      {
        constant: 'WP_MAX_MEMORY_LIMIT',
        description: 'Maximum memory limit for some WordPress features',
        defaultValue: '256M',
        possibleValues: ['Memory size'],
      },
      {
        constant: 'WP_MEMORY_LIMIT',
        description: 'Memory limit for running WordPress scripts',
        defaultValue: '32M, For Multisite 64M',
        possibleValues: ['Memory size'],
      },
      {
        constant: 'WP_START_TIMESTAMP',
        description: 'WP code start time stamp',
        defaultValue: 'Not set',
        possibleValues: ['Timestamp'],
      },
    ],
  },
  {
    category: 'Plugins',
    constants: [
      {
        constant: 'WP_UNINSTALL_PLUGIN',
        description: 'Defined during plugin removal',
        defaultValue: 'Not set',
        possibleValues: ['true'],
      },
    ],
  },
  {
    category: 'Proxy',
    constants: [
      {
        constant: 'WP_PROXY_BYPASS_HOSTS',
        description:
          'Allows you to define which addresses should not connect through the proxy',
        defaultValue: 'Not set',
        possibleValues: ['Comma-separated list'],
      },
      {
        constant: 'WP_PROXY_HOST',
        description: 'Defines proxy address',
        defaultValue: 'Not set',
        possibleValues: ['IP address or domain'],
      },
      {
        constant: 'WP_PROXY_PASSWORD',
        description: 'Defines password for the proxy',
        defaultValue: 'Not set',
        possibleValues: ['Password'],
      },
      {
        constant: 'WP_PROXY_PORT',
        description: 'Defines port for the proxy',
        defaultValue: 'Not set',
        possibleValues: ['Port number'],
      },
      {
        constant: 'WP_PROXY_USERNAME',
        description: 'Defines proxy username',
        defaultValue: 'Not set',
        possibleValues: ['Username'],
      },
    ],
  },
  {
    category: 'Request Types',
    constants: [
      {
        constant: 'APP_REQUEST',
        description:
          'Determined when an Atom Publishing Protocol request is made',
        defaultValue: 'Not set',
        possibleValues: ['true'],
      },
      {
        constant: 'DOING_AJAX',
        description: 'Determined when an AJAX request is executed',
        defaultValue: 'Not set',
        possibleValues: ['true'],
      },
      {
        constant: 'IFRAME_REQUEST',
        description: 'Determined if IFRAME request is executed',
        defaultValue: 'Not set',
        possibleValues: ['true'],
      },
      {
        constant: 'REST_REQUEST',
        description: 'Defined when performing a REST request',
        defaultValue: 'Not set',
        possibleValues: ['true'],
      },
      {
        constant: 'XMLRPC_REQUEST',
        description: 'Defined at any XML-RPC request',
        defaultValue: 'Not set',
        possibleValues: ['true'],
      },
    ],
  },
  {
    category: 'Security',
    constants: [
      // ... (previous security constants)
      {
        constant: 'SECURE_AUTH_KEY',
        description: 'Secret key',
        defaultValue: 'Not set',
        possibleValues: ['Text key'],
      },
      {
        constant: 'SECURE_AUTH_SALT',
        description: 'Secret key',
        defaultValue: 'Not set',
        possibleValues: ['Text key'],
      },
      {
        constant: 'WP_ACCESSIBLE_HOSTS',
        description:
          'If WP_HTTP_BLOCK_EXTERNAL is defined, you can add hosts that will not be blocked (white list)',
        defaultValue: 'Not set',
        possibleValues: ['Comma-separated list'],
      },
      {
        constant: 'WP_HTTP_BLOCK_EXTERNAL',
        description: 'Allows blocking external requests',
        defaultValue: 'Not set',
        possibleValues: ['true', 'false'],
      },
    ],
  },
  {
    category: 'Site Configuration',
    constants: [
      {
        constant: 'WP_HOME',
        description: 'The URL of your WordPress blog',
        defaultValue: 'Not set',
        possibleValues: ['URL'],
      },
      {
        constant: 'WP_SITEURL',
        description:
          'The URL of the WordPress root directory where the WordPress files are located',
        defaultValue: 'Not set',
        possibleValues: ['URL'],
      },
    ],
  },
  {
    category: 'Template',
    constants: [
      {
        constant: 'COMMENTS_TEMPLATE',
        description: 'Determined when a comment template is loaded',
        defaultValue: 'Not set',
        possibleValues: ['true'],
      },
    ],
  },
  {
    category: 'Testing',
    constants: [
      {
        constant: 'WP_TESTS_CONFIG_FILE_PATH',
        description:
          'Location of the wp-tests-config.php file which is used for PHPUnit tests',
        defaultValue: 'Not set',
        possibleValues: ['Path'],
      },
    ],
  },
  {
    category: 'Theme',
    constants: [
      {
        constant: 'BACKGROUND_IMAGE',
        description: 'Defines the default background image',
        defaultValue: 'Not set',
        possibleValues: ['Image URL'],
      },
      {
        constant: 'HEADER_IMAGE',
        description: 'Defines the default header image',
        defaultValue: 'Not set',
        possibleValues: ['Image URL'],
      },
      {
        constant: 'HEADER_IMAGE_HEIGHT',
        description: 'Specifies the height of the header image',
        defaultValue: 'Not set',
        possibleValues: ['Number'],
      },
      {
        constant: 'HEADER_IMAGE_WIDTH',
        description: 'Defines the width of the header image',
        defaultValue: 'Not set',
        possibleValues: ['Number'],
      },
      {
        constant: 'HEADER_TEXTCOLOR',
        description: 'Determines the color of the header text',
        defaultValue: 'Not set',
        possibleValues: ['Color code'],
      },
      {
        constant: 'NO_HEADER_TEXT',
        description: 'Enables or disables support for header text',
        defaultValue: 'Not set',
        possibleValues: ['true', 'false'],
      },
      {
        constant: 'STYLESHEETPATH',
        description: 'Contains the absolute path to the theme folder',
        defaultValue: 'Not set',
        possibleValues: ['Path'],
      },
      {
        constant: 'TEMPLATEPATH',
        description:
          'Contains an absolute path from the root of the site to the current theme',
        defaultValue: 'Not set',
        possibleValues: ['Path'],
      },
      {
        constant: 'WP_DEFAULT_THEME',
        description: 'Sets the default theme for new sites',
        defaultValue: 'twentyeleven',
        possibleValues: ['Theme name'],
      },
      {
        constant: 'WP_USE_THEMES',
        description: 'Enables or disables theme loading',
        defaultValue: 'Not set',
        possibleValues: ['true', 'false'],
      },
    ],
  },
  {
    category: 'Updates',
    constants: [
      {
        constant: 'AUTOMATIC_UPDATER_DISABLED',
        description: 'Auto-update engine, introduced in version 3.7',
        defaultValue: 'false',
        possibleValues: ['true', 'false'],
      },
      {
        constant: 'CORE_UPGRADE_SKIP_NEW_BUNDLED',
        description: 'Affect new file groups (plugins or themes) when updating',
        defaultValue: 'Not set',
        possibleValues: ['true', 'false'],
      },
      {
        constant: 'WP_AUTO_UPDATE_CORE',
        description: 'Manages core auto-updates',
        defaultValue: 'minor',
        possibleValues: ['true', 'false', 'minor'],
      },
    ],
  },
]
