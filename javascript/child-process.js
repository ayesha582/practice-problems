/**
 *
 * The spawn function launches a command in a new process and we can use it to pass that command any arguments.
 * By default, the spawn function does not create a shell to execute the command we pass into it.
 * This makes it slightly more efficient than the exec function, which does create a shell.
 * The exec function has one other major difference.
 * It buffers the command’s generated output and passes the whole output value to a callback function
 * (instead of using streams, which is what spawn does).
 * The exec function is a good choice if you need to use the shell syntax and if the size of the data
 * expected from the command is small. (Remember, exec will buffer the whole data in memory before returning it.)
 * The fork function is a variation of the spawn function for spawning node processes.
 * The biggest difference between spawn and fork is that a communication channel is established
 * to the child process when using fork, so we can use the send function on the forked process along with the
 * global process object itself to exchange messages between the parent and forked processes.
 * We do this through the EventEmitter module interface.
 *
 * **** */
