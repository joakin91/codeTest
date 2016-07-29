# Code Test
## Running the test
### Windows

- Using Windows Explorer, browse to `codetest-1\test`, and double click on `test.cmd`

![](http://i.imgur.com/LFlkioh.png)
- Open and edit the code.* files in the main directory. Use any code editor you are comfortable with.

![](http://i.imgur.com/4CBdwDz.png)
- Test will re-execute on any code change.

![](http://i.imgur.com/fvPU3IQ.png)
- Press Ctrl-C to exit test monitor.

### Mac/Linux
- Run Terminal ![](http://i.imgur.com/SXN3tNM.png)

- Install dependencies
    - Mac: 
        - Install git
            - Run `git` from Terminal command line, and if it's not installed, you should be prompted to install Xcode command line tools
        - Install Java (http://www.oracle.com/technetwork/java/javase/downloads/index.html)
        - Install Mono (http://www.mono-project.com/download/)
        - Install brew (http://brew.sh)
        - In Terminal, run `brew install scala node`
    - Ubuntu: 
        - Install git (`sudo apt-get install git`)
        - Install mono/fsharp (`sudo apt-get install mono-devel fsharp`)
        - Install node
        ````
        curl -sL https://deb.nodesource.com/setup_4.x | sudo -E bash -
        sudo apt-get install -y nodejs
        ````
        - Install java 8 and scala 2.11.7 (see https://gist.github.com/bigsnarfdude/b2eb1cabfdaf7e62a8fc)
- Run the test script
  - `cd codetest-1/test`
  - `sh test.sh`
- Open and edit the [Cc]ode.* files in the main directory. Use any code editor you are comfortable with.
- Test will re-execute on any code change.
- Press Ctrl-C to exit test monitor.
