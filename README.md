> gem install sass

Change /etc/sudoers
> sudo visudo

Add at the end
> deploy  ALL=(root) NOPASSWD: /sbin/start daenen, /sbin/stop daenen

Put Identity files in .ssh-dir

Add them to ssh-agent
ssh-add -K /Users/jfd/.ssh/daenen_deploy_rsa

Input password
