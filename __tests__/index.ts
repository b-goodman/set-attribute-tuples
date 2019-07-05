import setAttributeTuples from "../src"
type attrTuple = [string,string][];

it("Sets attributes to element", () => {
    const div = document.createElement("div");
    setAttributeTuples(div, [ ["id", "elemID"], ["class", "elemClassName"] ]);
    expect( div.id ).toEqual("elemID");
    expect( div.className ).toEqual("elemClassName");
});

it("Sets attributes to new element as argument", () => {
    const div = document.createElement("div");
    const attributes:attrTuple = [ ["id", "elemID"], ["class", "elemClassName"] ];
    setAttributeTuples(div, attributes);
    const div0 = setAttributeTuples( document.createElement("div"), attributes)
    expect( div.id ).toEqual("elemID");
    expect( div.className ).toEqual("elemClassName");
    expect( div0.id ).toEqual("elemID");
    expect( div0.className ).toEqual("elemClassName");
});

it("Works with 'data-*'", () => {
    const div = setAttributeTuples<HTMLDivElement>( document.createElement("div"), [["data-blah", "12345"]] );
    expect( div.dataset.blah ).toEqual( "12345" );
    expect( div.dataset["blah"] ).toEqual( "12345" );
});

it("Allows sustained calls", () => {
    const video = document.createElement("video");
    const attributes:attrTuple = [ ["id", "elemID"], ["class", "elemClassName"] ];
    setAttributeTuples(video, attributes);
    video.setAttribute("src", "./test.mp4");
    expect( video.id ).toEqual( "elemID" );
    expect( video.className ).toEqual( "elemClassName" );
    expect( video.src ).toEqual( "http://localhost/test.mp4" );
});



