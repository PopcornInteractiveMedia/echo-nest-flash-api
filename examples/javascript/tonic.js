function remix (analysis) {
    var tonic = analysis.key.value;
    var chunks = analysis.tatums;
    var segs = analysis.segments.that(havePitchMax(tonic)).that(overlapStartsOf(chunks));
    return chunks.that(overlapEndsOf(segs));
}
