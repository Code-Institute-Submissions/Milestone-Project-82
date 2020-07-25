describe('On button', () => {
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

describe('mute button', () => {
    describe('display light for mute button', () => {
        it('should have lightOn class', () => {
            spyOn($('#mute'), 'click');
            $('#power').click();
            $('#mute').click();
            expect($('#muteLight')).toHaveClass('lightOn')
        })
    })
    
})

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