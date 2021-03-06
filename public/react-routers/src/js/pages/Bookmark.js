import React from 'react';
import Article from '../components/Article';
import ScrollToTopOnMount from '../components/ScrollToTopOnMount';

export default class extends React.Component{
    render(){
        const query = new URLSearchParams(this.props.location.search);
        const { article } = this.props.match.params;
        const date = query.get("date");
        const filter = query.get("filter");

        const Articles = [
            "お",
            "き",
            "に",
            "い",
            "り"
        ].map((title, i) => <Article key={i} title={title} author="PandA" category="SF" />);
        return (
            <div>
                <ScrollToTopOnMount />
                <h1>bookmarks</h1>
                article: {article}, date:{date}, filter:{filter}
                <div class="bookmark-row">{Articles}</div>
            </div>
        );
    }
}