/*
Virtual Pet will have

name
hunger
boredom

functions
    feed
    play

    */
let underTest;

beforeEach(()=>{
    underTest = new VirtualPet("Fishy");
})
    describe("Virtual Pets have a name", ()=>{
        describe("Constructing virtual pet name is successful",()=>{
            it("Virtual Pet is named Fishy", ()=>{
                underTest.name = "Fishy";
                expect(underTest.name).toBe("Fishy");
            });
        });
    });
