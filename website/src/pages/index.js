import React from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Link from '@docusaurus/Link';

function Home() {
    const _siteConfig = useDocusaurusContext();
    const siteConfig = _siteConfig.siteConfig;
    const returnVariable = (
        <Layout
            permalink="/"
            title={siteConfig.title}
            description={siteConfig.tagline}>
            <main>
                <div>
                    <div className="heroCover">
                        <div className="homeContainer">
                            <div className="homeSplashFade">
                                <div className="wrapper homeWrapper">
                                    <div className="inner">
                                        <h1 className="projectTitle">
                                            <span className="lead">{siteConfig.customFields.taglineLead} </span>{siteConfig.tagline}
                                        </h1>
                                        <div className="section promoSection">
                                            <div className="promoRow">
                                                <div className="pluginRowBlock">
                                                    <div className="pluginWrapper buttonWrapper"><a className="button"
                                                        href="/docs"
                                                        target="_self">Overview</a>
                                                    </div>
                                                    <div className="pluginWrapper buttonWrapper"><a className="button"
                                                        href="/docs/started-installation"
                                                        target="_self">Getting
                                                        Started</a></div>
                                                    <div className="pluginWrapper buttonWrapper"><a className="button"
                                                        href="#try"
                                                        target="_self">Try
                                                        Online</a></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="container paddingBottom paddingTop" id="features">
                            <div className="wrapper">
                                <div className="gridBlock">
                                    <div className="blockElement alignCenter threeByGridBlock">
                                        <div className="blockContent">
                                            <h2>
                                                <div><span><p><a href="/docs/started-installation">
                                                    <img
                                                        src="/img/cicero-logo.svg" alt="Cicero" /></a></p>
                                                </span></div>
                                            </h2>
                                            <div><span><p>Create templates for human-readable and machine-executable contracts using Open Source <a
                                                href="/docs/started-installation">Cicero</a>.</p>
                                            </span></div>
                                        </div>
                                    </div>
                                    <div className="blockElement alignCenter threeByGridBlock">
                                        <div className="blockContent">
                                            <h2>
                                                <div><span><p><a href="/docs/logic-ergo"><img
                                                    src="/img/ergo-logo.svg" alt="Ergo" /></a></p>
                                                </span></div>
                                            </h2>
                                            <div><span><p>Write executable business logic for legal contracts using the <a
                                                href="/docs/logic-ergo">Ergo</a> domain-specific language.</p>
                                            </span></div>
                                        </div>
                                    </div>
                                    <div className="blockElement alignCenter threeByGridBlock">
                                        <div className="blockContent">
                                            <h2>
                                                <div><span><p><a href="/docs/model-concerto">Concerto</a></p>
                                                </span></div>
                                            </h2>
                                            <div><span><p>Model the data for your contracts in a platform neutral format with the <a
                                                href="/docs/model-concerto">Concerto</a> schema language.</p>
                                            </span></div>
                                        </div>
                                    </div>
                                    <div className="blockElement alignCenter threeByGridBlock">
                                        <div className="blockContent">
                                            <h2>
                                                <div><span><p><a href="https://templates.accordproject.org/">Template Library</a></p>
                                                </span></div>
                                            </h2>
                                            <div><span><p>Find user-contributed open source templates in the <a
                                                href="https://templates.accordproject.org/">Template Library</a>.</p>
                                            </span></div>
                                        </div>
                                    </div>
                                    <div className="blockElement alignCenter threeByGridBlock">
                                        <div className="blockContent">
                                            <h2>
                                                <div><span><p><a href="https://models.accordproject.org/">Model Repository</a></p>
                                                </span></div>
                                            </h2>
                                            <div><span><p>Use models from the <a
                                                href="https://models.accordproject.org/">Model Repository</a> to ensure interoperability between your templates.</p>
                                            </span></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div className="mainContainer">
                            <div className="container paddingBottom paddingTop" id="digitize-legal-contracts">
                                <div className="wrapper">
                                    <div className="gridBlock">
                                        <div className="blockElement alignCenter twoByGridBlock">
                                            <div className="blockContent">
                                                <h2>
                                                    <div><span><p>Digitize <span
                                                        className="strong">Legal Contracts</span></p>
                                                    </span></div>
                                                </h2>
                                                <div><span><div className="typeset">Use <b><em>open source</em></b> tools from the Accord Project to digitize new or existing legal contracts, connect them to web services and deploy them to the cloud or a blockchain platform. The projects comprise all of the software necessary to author, edit and execute smart legal contracts in a standardized fashion.</div></span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="container paddingBottom paddingTop" id="templates">
                                <div className="wrapper">
                                    <div className="gridBlock">
                                        <div
                                            className="blockElement alignCenter imageAlignSide imageAlignRight twoByGridBlock">
                                            <div className="blockContent">
                                                <h2>
                                                    <div><span><p>Templates</p>
                                                    </span></div>
                                                </h2>
                                                <div><span><div className="typeset">Accord Project Templates are composed of three elements: the Text (the natural language), the Model (the data model), and the Logic (the executable business logic). When combined these three elements allow Accord Project templates to be both <b><em>human-readable</em></b> and <b><em>machine-executable</em></b>.</div></span>
                                                </div>
                                            </div>
                                            <div className="blockImage"><img src="/img/../docs/assets/020/template.png"
                                                alt="The three elements of Accord Project templates: Text, Model, Logic. These elements form a triangle." />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="container darkBackground paddingBottom paddingTop" id="accord">
                                <div className="wrapper">
                                    <div className="gridBlock">
                                        <div
                                            className="blockElement alignCenter imageAlignSide imageAlignLeft twoByGridBlock">
                                            <div className="blockImage"><img src="/img/../docs/assets/020/grammar.png"
                                                alt="An example of an Accord Project template text. There are 3 paragraphs of a contract with variables in each paragraphs and markdown annotations for formatting" />
                                            </div>
                                            <div className="blockContent">
                                                <h2>
                                                    <div><span><p>Text</p>
                                                    </span></div>
                                                </h2>
                                                <div><span><div className="typeset">CiceroMark lets you capture the data in a natural language clause or contract text through <b><em>template variables</em></b>. And it supports rich text <b><em>markdown</em></b> to ensure that your contracts look professional.</div></span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="container paddingBottom paddingTop" id="model">
                                <div className="wrapper">
                                    <div className="gridBlock">
                                        <div
                                            className="blockElement alignCenter imageAlignSide imageAlignRight twoByGridBlock">
                                            <div className="blockContent">
                                                <h2>
                                                    <div><span><p>Model</p>
                                                    </span></div>
                                                </h2>
                                                <div><span><div className="typeset">Concerto lets you model the data used in your templates in a flexible and expressive way. Models can be written in a modular and portable way so they can be reused in a variety of contracts.</div></span>
                                                </div>
                                            </div>
                                            <div className="blockImage"><img src="/img/model-uml.png"
                                                alt="A diagram with an example of a Concerto model" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="container darkBackground paddingBottom paddingTop" id="logic">
                                <div className="wrapper">
                                    <div className="gridBlock">
                                        <div
                                            className="blockElement alignCenter imageAlignSide imageAlignLeft twoByGridBlock">
                                            <div className="blockImage"><img src="/img/../docs/assets/020/ergo.png"
                                                alt="Example of an Ergo file" /></div>
                                            <div className="blockContent">
                                                <h2>
                                                    <div><span><p>Logic</p>
                                                    </span></div>
                                                </h2>
                                                <div><span><div className="typeset">Ergo is a <em>strongly-typed</em> domain specific language designed to capture computational aspects of legal contracts and clauses. Use Ergo to create <strong>safe</strong> smart legal contract logic.</div></span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="container paddingBottom paddingTop" id="try">
                                <div className="wrapper">
                                    <div className="gridBlock">
                                        <div
                                            className="blockElement alignCenter imageAlignSide imageAlignRight twoByGridBlock" id="try">
                                            <div className="blockContent">
                                                <h2>
                                                    <div><span><p>Author <span className="strong">and Edit</span></p>
                                                    </span></div>
                                                </h2>
                                                <div><span><div className="typeset">You can author and test templates online in the Accord Project <a href="https://studio.accordproject.org">Template Studio</a>. Search for existing templates, edit the contract text and execute the logic.</div></span>
                                                </div>
                                            </div>
                                            <div className="blockImage">
                                                <img src="/img/../docs/assets/020/studio.png"
                                                    alt="An example a template being edited. There is an option to edit the full contract or a single clause. There is also a search bar at the top center for users to search for specific templates." />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>





                    </div>

                </div>
            </main>
        </Layout>
    );

    if (returnVariable) return returnVariable;
    else "accordproject";
}

export default Home;
