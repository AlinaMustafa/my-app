describe('My React application', () => {   
    it('should look correct', async () => {
        await  browser.url('http://localhost:3000');
        await  browser.execute('/*@visual.init*/', 'My React App');
        await  browser.execute('/*@visual.snapshot*/', 'Home Page');
        await  browser.execute('/*@visual.end*/');
        await browser.pause(3000)

        
    });
});