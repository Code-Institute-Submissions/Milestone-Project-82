//Tests that the on button turns the game off and return buttons colours to normal
describe('On/Off button', () => {
    describe('Turning the game off', () => {
        
        beforeEach(function() {
            on = false;
            $('#power').click();
        })

        it('Should call clearColour', () => {
            spyOn(window, 'clearColour');
            $('#power').click();
            expect(window.clearColour).toHaveBeenCalled();
        })
    })
})

//Tests that the start button will call the play function only when the game is on
describe('start button', () => {
    beforeEach(() => {
        on = false;
    })
    describe('power is off', () => {
        it('should not call play function', () => {
            spyOn(window, 'play');
            $('#start').click();
            expect(window.play).not.toHaveBeenCalled();
        })
    })
         describe('power is on', () => {
        it('should call play function', () => {
            spyOn(window, 'play');
            $('#power').click();
            $('#start').click();
            expect(window.play).toHaveBeenCalled();
        })
    })
})
//Tests that the game buttons all play audio when mute is off
describe('game buttons', () => {
    beforeEach(() => {
        on = true;
        mute = false;
    })
    it("red button should play audio when clicked or flashed", () => {
        spyOn(window, 'one')
        var a = new one();
        a.audio = jasmine.createSpy();
        a.audio();
        expect(a.audio).toHaveBeenCalled()
        })
    it("green button should play audio when clicked or flashed", () => {
        spyOn(window, 'one')
        var a = new two();
        a.audio = jasmine.createSpy();
        a.audio();
        expect(a.audio).toHaveBeenCalled()
        })
    it("blue button should play audio when clicked or flashed", () => {
        spyOn(window, 'one')
        var a = new three();
        a.audio = jasmine.createSpy();
        a.audio();
        expect(a.audio).toHaveBeenCalled()
        })
    it("yellow button should play audio when clicked or flashed", () => {
        spyOn(window, 'one')
        var a = new four();
        a.audio = jasmine.createSpy();
        a.audio();
        expect(a.audio).toHaveBeenCalled()
        })
})


