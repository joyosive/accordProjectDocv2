<div>
      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
      <title>Module ErgoSpec.Ergo.Lang.ErgoSem</title>
      <meta
        name="description"
        content="Documentation of Coq module ErgoSpec.Ergo.Lang.ErgoSem"
      />
      <link href="coq2html.css" rel="stylesheet" type="text/css" />
      <h1 className="title">Module ErgoSpec.Ergo.Lang.ErgoSem</h1>
      <div className="coq">
        <br />
        <div className="doc">
          Ergo is a language for expressing contract logic.{" "}
        </div>
        <br />
        <h1> Semantics </h1>
        <br />
        <span className="kwd">
          Require
        </span> <span className="kwd">Import</span>{" "}
        <span className="id">
          <a href="http://coq.inria.fr/library/Coq.Strings.String.html">String</a>
        </span>
        .<br />
        <span className="kwd">
          Require
        </span> <span className="kwd">Import</span>{" "}
        <span className="id">
          <a href="http://coq.inria.fr/library/Coq.Lists.List.html">List</a>
        </span>
        .<br />
        <span className="kwd">
          Require
        </span> <span className="kwd">Import</span>{" "}
        <span className="id">
          <a href="http://coq.inria.fr/library/Coq.Classes.EquivDec.html">
            EquivDec
          </a>
        </span>
        .<br />
        <br />
        <span className="kwd">
          Require
        </span> <span className="kwd">Import</span>{" "}
        <span className="id">
          <a href="ErgoSpec.Common.Utils.Result.html">
            ErgoSpec.Common.Utils.Result
          </a>
        </span>
        .<br />
        <span className="kwd">
          Require
        </span> <span className="kwd">Import</span>{" "}
        <span className="id">
          <a href="ErgoSpec.Common.Utils.Names.html">ErgoSpec.Common.Utils.Names</a>
        </span>
        .<br />
        <span className="kwd">
          Require
        </span> <span className="kwd">Import</span>{" "}
        <span className="id">
          <a href="ErgoSpec.Common.CTO.CTO.html">ErgoSpec.Common.CTO.CTO</a>
        </span>
        .<br />
        <span className="kwd">
          Require
        </span> <span className="kwd">Import</span>{" "}
        <span className="id">
          <a href="ErgoSpec.Backend.ErgoBackend.html">
            ErgoSpec.Backend.ErgoBackend
          </a>
        </span>
        .<br />
        <span className="kwd">
          Require
        </span> <span className="kwd">Import</span>{" "}
        <span className="id">
          <a href="ErgoSpec.Ergo.Lang.Ergo.html">ErgoSpec.Ergo.Lang.Ergo</a>
        </span>
        .<br />
        <br />
        <span className="kwd">Section</span>{" "}
        <span className="id">
          <a name="ErgoSem">ErgoSem</a>
        </span>
        .<br />
        &nbsp;&nbsp;<span className="kwd">Record</span>{" "}
        <span className="id">
          <a name="env">env</a>
        </span>{" "}
        :=
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;
        <span className="id">
          <a name="mkDynEnv">mkDynEnv</a>
        </span>
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{"{"}{" "}
        <span className="id">
          <a name="env_this_contract">env_this_contract</a>
        </span>{" "}
        :{" "}
        <span className="id">
          <a href="ErgoSpec.Backend.ErgoBackend.html#ErgoData.data">
            ErgoData.data
          </a>
        </span>
        ;<br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <span className="id">
          <a name="env_this_clause">env_this_clause</a>
        </span>{" "}
        :{" "}
        <span className="id">
          <a href="ErgoSpec.Backend.ErgoBackend.html#ErgoData.data">
            ErgoData.data
          </a>
        </span>
        ;<br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <span className="id">
          <a name="env_this_state">env_this_state</a>
        </span>{" "}
        :{" "}
        <span className="id">
          <a href="ErgoSpec.Backend.ErgoBackend.html#ErgoData.data">
            ErgoData.data
          </a>
        </span>
        ;<br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <span className="id">
          <a name="env_this_emit">env_this_emit</a>
        </span>{" "}
        :{" "}
        <span className="id">
          <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#list">
            list
          </a>
        </span>{" "}
        <span className="id">
          <a href="ErgoSpec.Backend.ErgoBackend.html#ErgoData.data">
            ErgoData.data
          </a>
        </span>
        ;<br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <span className="id">
          <a name="env_variables">env_variables</a>
        </span>{" "}
        :{" "}
        <span className="id">
          <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#list">
            list
          </a>
        </span>{" "}
        (
        <span className="id">
          <a href="http://coq.inria.fr/library/Coq.Strings.String.html#string">
            string
          </a>
        </span>{" "}
        *{" "}
        <span className="id">
          <a href="ErgoSpec.Backend.ErgoBackend.html#ErgoData.data">
            ErgoData.data
          </a>
        </span>
        ); {"}"}.<br />
        <br />
        &nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
        <span className="id">
          <a name="env_add_variable">env_add_variable</a>
        </span>{" "}
        <span className="id">env</span> <span className="id">v</span>{" "}
        <span className="id">d</span> :=
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;
        <span className="id">
          <a href="ErgoSpec.Ergo.Lang.ErgoSem.html#mkDynEnv">mkDynEnv</a>
        </span>
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <span className="id">
          <a href="ErgoSpec.Ergo.Lang.ErgoSem.html#env">env</a>
        </span>
        .(
        <span className="id">
          <a href="ErgoSpec.Ergo.Lang.ErgoSem.html#env_this_contract">
            env_this_contract
          </a>
        </span>
        )<br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <span className="id">
          <a href="ErgoSpec.Ergo.Lang.ErgoSem.html#env">env</a>
        </span>
        .(
        <span className="id">
          <a href="ErgoSpec.Ergo.Lang.ErgoSem.html#env_this_clause">
            env_this_clause
          </a>
        </span>
        )<br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <span className="id">
          <a href="ErgoSpec.Ergo.Lang.ErgoSem.html#env">env</a>
        </span>
        .(
        <span className="id">
          <a href="ErgoSpec.Ergo.Lang.ErgoSem.html#env_this_state">
            env_this_state
          </a>
        </span>
        )<br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <span className="id">
          <a href="ErgoSpec.Ergo.Lang.ErgoSem.html#env">env</a>
        </span>
        .(
        <span className="id">
          <a href="ErgoSpec.Ergo.Lang.ErgoSem.html#env_this_emit">env_this_emit</a>
        </span>
        )<br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;((
        <span className="id">
          <a href="ErgoSpec.Ergo.Lang.ErgoSem.html#v">v</a>
        </span>
        ,
        <span className="id">
          <a href="ErgoSpec.Ergo.Lang.ErgoSem.html#d">d</a>
        </span>
        )::
        <span className="id">
          <a href="ErgoSpec.Ergo.Lang.ErgoSem.html#env">env</a>
        </span>
        .(
        <span className="id">
          <a href="ErgoSpec.Ergo.Lang.ErgoSem.html#env_variables">env_variables</a>
        </span>
        )).
        <br />
        &nbsp;&nbsp;
        <br />
        &nbsp;&nbsp;<span className="kwd">Definition</span>{" "}
        <span className="id">
          <a name="module_context">module_context</a>
        </span>{" "}
        :={" "}
        <span className="id">
          <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#list">
            list
          </a>
        </span>{" "}
        <span className="id">
          <a href="ErgoSpec.Ergo.Lang.Ergo.html#laergo_module">laergo_module</a>
        </span>
        .<br />
        <br />
        <div className="doc">
          Currently, this is written as a big-step semantics. There is some amount
          of duplication in rules preconditions due to error handling. This might
          benefit to be written in a pretty-big-step semantic style. See{" "}
          <span className="bracket">
            <span className="id">Chargu</span>??<span className="id">raud</span>{" "}
            <span className="id">ESOP</span> 2013
          </span>
          http://www.chargueraud.org/research/2012/pretty/{" "}
        </div>
        <br />
        &nbsp;&nbsp;<span className="kwd">Inductive</span>{" "}
        <span className="id">
          <a name="ergo_expr_sem">ergo_expr_sem</a>
        </span>{" "}
        :{" "}
        <span className="id">
          <a href="ErgoSpec.Ergo.Lang.ErgoSem.html#module_context">
            module_context
          </a>
        </span>{" "}
        -&gt;{" "}
        <span className="id">
          <a href="ErgoSpec.Ergo.Lang.ErgoSem.html#env">env</a>
        </span>{" "}
        -&gt;{" "}
        <span className="id">
          <a href="ErgoSpec.Ergo.Lang.Ergo.html#laergo_expr">laergo_expr</a>
        </span>{" "}
        -&gt;{" "}
        <span className="id">
          <a href="ErgoSpec.Backend.ErgoBackend.html#ErgoData.data">
            ErgoData.data
          </a>
        </span>{" "}
        -&gt; <span className="kwd">Prop</span> :=
        <br />
        &nbsp;&nbsp;|{" "}
        <span className="id">
          <a name="sem_EThisContract">sem_EThisContract</a>
        </span>{" "}
        : <span className="kwd">forall</span> <span className="id">a</span>{" "}
        <span className="id">mc</span> <span className="id">env</span>,<br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <span className="id">
          <a href="ErgoSpec.Ergo.Lang.ErgoSem.html#ergo_expr_sem">ergo_expr_sem</a>
        </span>{" "}
        <span className="id">
          <a href="ErgoSpec.Ergo.Lang.ErgoSem.html#mc">mc</a>
        </span>{" "}
        <span className="id">
          <a href="ErgoSpec.Ergo.Lang.ErgoSem.html#env">env</a>
        </span>{" "}
        (
        <span className="id">
          <a href="ErgoSpec.Ergo.Lang.Ergo.html#EThisContract">EThisContract</a>
        </span>{" "}
        <span className="id">
          <a href="ErgoSpec.Ergo.Lang.ErgoSem.html#a">a</a>
        </span>
        ) (
        <span className="id">
          <a href="ErgoSpec.Ergo.Lang.ErgoSem.html#env">env</a>
        </span>
        .(
        <span className="id">
          <a href="ErgoSpec.Ergo.Lang.ErgoSem.html#env_this_contract">
            env_this_contract
          </a>
        </span>
        ))
        <br />
        &nbsp;&nbsp;|{" "}
        <span className="id">
          <a name="sem_EThisClause">sem_EThisClause</a>
        </span>{" "}
        : <span className="kwd">forall</span> <span className="id">a</span>{" "}
        <span className="id">mc</span> <span className="id">env</span>,<br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <span className="id">
          <a href="ErgoSpec.Ergo.Lang.ErgoSem.html#ergo_expr_sem">ergo_expr_sem</a>
        </span>{" "}
        <span className="id">
          <a href="ErgoSpec.Ergo.Lang.ErgoSem.html#mc">mc</a>
        </span>{" "}
        <span className="id">
          <a href="ErgoSpec.Ergo.Lang.ErgoSem.html#env">env</a>
        </span>{" "}
        (
        <span className="id">
          <a href="ErgoSpec.Ergo.Lang.Ergo.html#EThisClause">EThisClause</a>
        </span>{" "}
        <span className="id">
          <a href="ErgoSpec.Ergo.Lang.ErgoSem.html#a">a</a>
        </span>
        ) (
        <span className="id">
          <a href="ErgoSpec.Ergo.Lang.ErgoSem.html#env">env</a>
        </span>
        .(
        <span className="id">
          <a href="ErgoSpec.Ergo.Lang.ErgoSem.html#env_this_clause">
            env_this_clause
          </a>
        </span>
        ))
        <br />
        &nbsp;&nbsp;|{" "}
        <span className="id">
          <a name="sem_EThisState">sem_EThisState</a>
        </span>{" "}
        : <span className="kwd">forall</span> <span className="id">a</span>{" "}
        <span className="id">mc</span> <span className="id">env</span>,<br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <span className="id">
          <a href="ErgoSpec.Ergo.Lang.ErgoSem.html#ergo_expr_sem">ergo_expr_sem</a>
        </span>{" "}
        <span className="id">
          <a href="ErgoSpec.Ergo.Lang.ErgoSem.html#mc">mc</a>
        </span>{" "}
        <span className="id">
          <a href="ErgoSpec.Ergo.Lang.ErgoSem.html#env">env</a>
        </span>{" "}
        (
        <span className="id">
          <a href="ErgoSpec.Ergo.Lang.Ergo.html#EThisState">EThisState</a>
        </span>{" "}
        <span className="id">
          <a href="ErgoSpec.Ergo.Lang.ErgoSem.html#a">a</a>
        </span>
        ) (
        <span className="id">
          <a href="ErgoSpec.Ergo.Lang.ErgoSem.html#env">env</a>
        </span>
        .(
        <span className="id">
          <a href="ErgoSpec.Ergo.Lang.ErgoSem.html#env_this_state">
            env_this_state
          </a>
        </span>
        ))
        <br />
        &nbsp;&nbsp;|{" "}
        <span className="id">
          <a name="sem_EVar">sem_EVar</a>
        </span>{" "}
        : <span className="kwd">forall</span> <span className="id">a</span>{" "}
        <span className="id">mc</span> <span className="id">env</span>{" "}
        <span className="id">v</span> <span className="id">d</span>,<br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <span className="id">
          <a href="https://querycert.github.io/html/Qcert.Utils.Assoc.html#lookup">
            lookup
          </a>
        </span>{" "}
        <span className="id">
          <a href="http://coq.inria.fr/library/Coq.Classes.EquivDec.html#equiv_dec">
            equiv_dec
          </a>
        </span>{" "}
        <span className="id">
          <a href="ErgoSpec.Ergo.Lang.ErgoSem.html#env">env</a>
        </span>
        .(
        <span className="id">
          <a href="ErgoSpec.Ergo.Lang.ErgoSem.html#env_variables">env_variables</a>
        </span>
        ){" "}
        <span className="id">
          <a href="ErgoSpec.Ergo.Lang.ErgoSem.html#v">v</a>
        </span>{" "}
        ={" "}
        <span className="id">
          <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#Some">
            Some
          </a>
        </span>{" "}
        <span className="id">
          <a href="ErgoSpec.Ergo.Lang.ErgoSem.html#d">d</a>
        </span>{" "}
        -&gt;{" "}
        <span className="docright">
          (*{" "}
          <span className="bracket">
            ??(<span className="id">v</span>) = <span className="id">d</span>
          </span>{" "}
          *)
        </span>
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <span className="id">
          <a href="ErgoSpec.Ergo.Lang.ErgoSem.html#ergo_expr_sem">ergo_expr_sem</a>
        </span>{" "}
        <span className="id">
          <a href="ErgoSpec.Ergo.Lang.ErgoSem.html#mc">mc</a>
        </span>{" "}
        <span className="id">
          <a href="ErgoSpec.Ergo.Lang.ErgoSem.html#env">env</a>
        </span>{" "}
        (
        <span className="id">
          <a href="ErgoSpec.Ergo.Lang.Ergo.html#EVar">EVar</a>
        </span>{" "}
        <span className="id">
          <a href="ErgoSpec.Ergo.Lang.ErgoSem.html#a">a</a>
        </span>{" "}
        <span className="id">
          <a href="ErgoSpec.Ergo.Lang.ErgoSem.html#v">v</a>
        </span>
        ){" "}
        <span className="id">
          <a href="ErgoSpec.Ergo.Lang.ErgoSem.html#d">d</a>
        </span>{" "}
        <br />
        &nbsp;&nbsp;|{" "}
        <span className="id">
          <a name="sem_EConst">sem_EConst</a>
        </span>{" "}
        : <span className="kwd">forall</span> <span className="id">a</span>{" "}
        <span className="id">mc</span> <span className="id">env</span>{" "}
        <span className="id">d</span>,<br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <span className="id">
          <a href="ErgoSpec.Ergo.Lang.ErgoSem.html#ergo_expr_sem">ergo_expr_sem</a>
        </span>{" "}
        <span className="id">
          <a href="ErgoSpec.Ergo.Lang.ErgoSem.html#mc">mc</a>
        </span>{" "}
        <span className="id">
          <a href="ErgoSpec.Ergo.Lang.ErgoSem.html#env">env</a>
        </span>{" "}
        (
        <span className="id">
          <a href="ErgoSpec.Ergo.Lang.Ergo.html#EConst">EConst</a>
        </span>{" "}
        <span className="id">
          <a href="ErgoSpec.Ergo.Lang.ErgoSem.html#a">a</a>
        </span>{" "}
        <span className="id">
          <a href="ErgoSpec.Ergo.Lang.ErgoSem.html#d">d</a>
        </span>
        ){" "}
        <span className="id">
          <a href="ErgoSpec.Ergo.Lang.ErgoSem.html#d">d</a>
        </span>
        <br />
        &nbsp;&nbsp;|{" "}
        <span className="id">
          <a name="sem_EArray_nil">sem_EArray_nil</a>
        </span>{" "}
        : <span className="kwd">forall</span> <span className="id">a</span>{" "}
        <span className="id">mc</span> <span className="id">env</span>,<br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <span className="id">
          <a href="ErgoSpec.Ergo.Lang.ErgoSem.html#ergo_expr_sem">ergo_expr_sem</a>
        </span>{" "}
        <span className="id">
          <a href="ErgoSpec.Ergo.Lang.ErgoSem.html#mc">mc</a>
        </span>{" "}
        <span className="id">
          <a href="ErgoSpec.Ergo.Lang.ErgoSem.html#env">env</a>
        </span>{" "}
        (
        <span className="id">
          <a href="ErgoSpec.Ergo.Lang.Ergo.html#EArray">EArray</a>
        </span>{" "}
        <span className="id">
          <a href="ErgoSpec.Ergo.Lang.ErgoSem.html#a">a</a>
        </span>{" "}
        <span className="id">
          <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#nil">nil</a>
        </span>
        ) (
        <span className="id">
          <a href="ErgoSpec.Backend.ErgoBackend.html#ErgoData.dcoll">
            ErgoData.dcoll
          </a>
        </span>{" "}
        <span className="id">
          <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#nil">nil</a>
        </span>
        )<br />
        &nbsp;&nbsp;|{" "}
        <span className="id">
          <a name="sem_EArray_cons">sem_EArray_cons</a>
        </span>{" "}
        : <span className="kwd">forall</span> <span className="id">a1</span>{" "}
        <span className="id">a2</span> <span className="id">mc</span>{" "}
        <span className="id">env</span> <span className="id">e1</span>{" "}
        <span className="id">el</span> <span className="id">d1</span>{" "}
        <span className="id">dl</span>,<br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <span className="id">
          <a href="ErgoSpec.Ergo.Lang.ErgoSem.html#ergo_expr_sem">ergo_expr_sem</a>
        </span>{" "}
        <span className="id">
          <a href="ErgoSpec.Ergo.Lang.ErgoSem.html#mc">mc</a>
        </span>{" "}
        <span className="id">
          <a href="ErgoSpec.Ergo.Lang.ErgoSem.html#env">env</a>
        </span>{" "}
        <span className="id">
          <a href="ErgoSpec.Ergo.Lang.ErgoSem.html#e1">e1</a>
        </span>{" "}
        <span className="id">
          <a href="ErgoSpec.Ergo.Lang.ErgoSem.html#d1">d1</a>
        </span>{" "}
        -&gt;
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <span className="id">
          <a href="ErgoSpec.Ergo.Lang.ErgoSem.html#ergo_expr_sem">ergo_expr_sem</a>
        </span>{" "}
        <span className="id">
          <a href="ErgoSpec.Ergo.Lang.ErgoSem.html#mc">mc</a>
        </span>{" "}
        <span className="id">
          <a href="ErgoSpec.Ergo.Lang.ErgoSem.html#env">env</a>
        </span>{" "}
        (
        <span className="id">
          <a href="ErgoSpec.Ergo.Lang.Ergo.html#EArray">EArray</a>
        </span>{" "}
        <span className="id">
          <a href="ErgoSpec.Ergo.Lang.ErgoSem.html#a1">a1</a>
        </span>{" "}
        <span className="id">
          <a href="ErgoSpec.Ergo.Lang.ErgoSem.html#el">el</a>
        </span>
        ) (
        <span className="id">
          <a href="ErgoSpec.Backend.ErgoBackend.html#ErgoData.dcoll">
            ErgoData.dcoll
          </a>
        </span>{" "}
        <span className="id">
          <a href="ErgoSpec.Ergo.Lang.ErgoSem.html#dl">dl</a>
        </span>
        ) -&gt;
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <span className="id">
          <a href="ErgoSpec.Ergo.Lang.ErgoSem.html#ergo_expr_sem">ergo_expr_sem</a>
        </span>{" "}
        <span className="id">
          <a href="ErgoSpec.Ergo.Lang.ErgoSem.html#mc">mc</a>
        </span>{" "}
        <span className="id">
          <a href="ErgoSpec.Ergo.Lang.ErgoSem.html#env">env</a>
        </span>{" "}
        (
        <span className="id">
          <a href="ErgoSpec.Ergo.Lang.Ergo.html#EArray">EArray</a>
        </span>{" "}
        <span className="id">
          <a href="ErgoSpec.Ergo.Lang.ErgoSem.html#a2">a2</a>
        </span>{" "}
        (
        <span className="id">
          <a href="ErgoSpec.Ergo.Lang.ErgoSem.html#e1">e1</a>
        </span>
        ::
        <span className="id">
          <a href="ErgoSpec.Ergo.Lang.ErgoSem.html#el">el</a>
        </span>
        )) (
        <span className="id">
          <a href="ErgoSpec.Backend.ErgoBackend.html#ErgoData.dcoll">
            ErgoData.dcoll
          </a>
        </span>{" "}
        (
        <span className="id">
          <a href="ErgoSpec.Ergo.Lang.ErgoSem.html#d1">d1</a>
        </span>
        ::
        <span className="id">
          <a href="ErgoSpec.Ergo.Lang.ErgoSem.html#dl">dl</a>
        </span>
        ))
        <br />
        &nbsp;&nbsp;|{" "}
        <span className="id">
          <a name="sem_EUnaryOp">sem_EUnaryOp</a>
        </span>{" "}
        : <span className="kwd">forall</span> <span className="id">a</span>{" "}
        <span className="id">uop</span> <span className="id">mc</span>{" "}
        <span className="id">env</span> <span className="id">e1</span>{" "}
        <span className="id">h</span> <span className="id">d1</span>{" "}
        <span className="id">d2</span>,<br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <span className="id">
          <a href="ErgoSpec.Ergo.Lang.ErgoSem.html#ergo_expr_sem">ergo_expr_sem</a>
        </span>{" "}
        <span className="id">
          <a href="ErgoSpec.Ergo.Lang.ErgoSem.html#mc">mc</a>
        </span>{" "}
        <span className="id">
          <a href="ErgoSpec.Ergo.Lang.ErgoSem.html#env">env</a>
        </span>{" "}
        <span className="id">
          <a href="ErgoSpec.Ergo.Lang.ErgoSem.html#e1">e1</a>
        </span>{" "}
        <span className="id">
          <a href="ErgoSpec.Ergo.Lang.ErgoSem.html#d1">d1</a>
        </span>{" "}
        -&gt;
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <span className="id">
          <a href="ErgoSpec.Backend.ErgoBackend.html#ErgoOps.Unary.eval">
            ErgoOps.Unary.eval
          </a>
        </span>{" "}
        <span className="id">
          <a href="ErgoSpec.Ergo.Lang.ErgoSem.html#h">h</a>
        </span>{" "}
        <span className="id">
          <a href="ErgoSpec.Ergo.Lang.ErgoSem.html#uop">uop</a>
        </span>{" "}
        <span className="id">
          <a href="ErgoSpec.Ergo.Lang.ErgoSem.html#d1">d1</a>
        </span>{" "}
        ={" "}
        <span className="id">
          <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#Some">
            Some
          </a>
        </span>{" "}
        <span className="id">
          <a href="ErgoSpec.Ergo.Lang.ErgoSem.html#d2">d2</a>
        </span>{" "}
        -&gt;{" "}
        <span className="docright">
          (* ???{" "}
          <span className="bracket">
            ??? <span className="id">d</span>??? = <span className="id">d</span>???
          </span>{" "}
          *)
        </span>
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <span className="id">
          <a href="ErgoSpec.Ergo.Lang.ErgoSem.html#ergo_expr_sem">ergo_expr_sem</a>
        </span>{" "}
        <span className="id">
          <a href="ErgoSpec.Ergo.Lang.ErgoSem.html#mc">mc</a>
        </span>{" "}
        <span className="id">
          <a href="ErgoSpec.Ergo.Lang.ErgoSem.html#env">env</a>
        </span>{" "}
        (
        <span className="id">
          <a href="ErgoSpec.Ergo.Lang.Ergo.html#EUnaryOp">EUnaryOp</a>
        </span>{" "}
        <span className="id">
          <a href="ErgoSpec.Ergo.Lang.ErgoSem.html#a">a</a>
        </span>{" "}
        <span className="id">
          <a href="ErgoSpec.Ergo.Lang.ErgoSem.html#uop">uop</a>
        </span>{" "}
        <span className="id">
          <a href="ErgoSpec.Ergo.Lang.ErgoSem.html#e1">e1</a>
        </span>
        ){" "}
        <span className="id">
          <a href="ErgoSpec.Ergo.Lang.ErgoSem.html#d2">d2</a>
        </span>
        <br />
        &nbsp;&nbsp;|{" "}
        <span className="id">
          <a name="sem_EBinnaryOp">sem_EBinnaryOp</a>
        </span>{" "}
        : <span className="kwd">forall</span> <span className="id">a</span>{" "}
        <span className="id">bop</span> <span className="id">mc</span>{" "}
        <span className="id">env</span> <span className="id">e1</span>{" "}
        <span className="id">e2</span> <span className="id">h</span>{" "}
        <span className="id">d1</span> <span className="id">d2</span>{" "}
        <span className="id">d3</span>,<br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <span className="id">
          <a href="ErgoSpec.Ergo.Lang.ErgoSem.html#ergo_expr_sem">ergo_expr_sem</a>
        </span>{" "}
        <span className="id">
          <a href="ErgoSpec.Ergo.Lang.ErgoSem.html#mc">mc</a>
        </span>{" "}
        <span className="id">
          <a href="ErgoSpec.Ergo.Lang.ErgoSem.html#env">env</a>
        </span>{" "}
        <span className="id">
          <a href="ErgoSpec.Ergo.Lang.ErgoSem.html#e1">e1</a>
        </span>{" "}
        <span className="id">
          <a href="ErgoSpec.Ergo.Lang.ErgoSem.html#d1">d1</a>
        </span>{" "}
        -&gt;
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <span className="id">
          <a href="ErgoSpec.Ergo.Lang.ErgoSem.html#ergo_expr_sem">ergo_expr_sem</a>
        </span>{" "}
        <span className="id">
          <a href="ErgoSpec.Ergo.Lang.ErgoSem.html#mc">mc</a>
        </span>{" "}
        <span className="id">
          <a href="ErgoSpec.Ergo.Lang.ErgoSem.html#env">env</a>
        </span>{" "}
        <span className="id">
          <a href="ErgoSpec.Ergo.Lang.ErgoSem.html#e2">e2</a>
        </span>{" "}
        <span className="id">
          <a href="ErgoSpec.Ergo.Lang.ErgoSem.html#d2">d2</a>
        </span>{" "}
        -&gt;
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <span className="id">
          <a href="ErgoSpec.Backend.ErgoBackend.html#ErgoOps.Binary.eval">
            ErgoOps.Binary.eval
          </a>
        </span>{" "}
        <span className="id">
          <a href="ErgoSpec.Ergo.Lang.ErgoSem.html#h">h</a>
        </span>{" "}
        <span className="id">
          <a href="ErgoSpec.Ergo.Lang.ErgoSem.html#bop">bop</a>
        </span>{" "}
        <span className="id">
          <a href="ErgoSpec.Ergo.Lang.ErgoSem.html#d1">d1</a>
        </span>{" "}
        <span className="id">
          <a href="ErgoSpec.Ergo.Lang.ErgoSem.html#d2">d2</a>
        </span>{" "}
        ={" "}
        <span className="id">
          <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#Some">
            Some
          </a>
        </span>{" "}
        <span className="id">
          <a href="ErgoSpec.Ergo.Lang.ErgoSem.html#d3">d3</a>
        </span>{" "}
        -&gt;
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <span className="id">
          <a href="ErgoSpec.Ergo.Lang.ErgoSem.html#ergo_expr_sem">ergo_expr_sem</a>
        </span>{" "}
        <span className="id">
          <a href="ErgoSpec.Ergo.Lang.ErgoSem.html#mc">mc</a>
        </span>{" "}
        <span className="id">
          <a href="ErgoSpec.Ergo.Lang.ErgoSem.html#env">env</a>
        </span>{" "}
        (
        <span className="id">
          <a href="ErgoSpec.Ergo.Lang.Ergo.html#EBinaryOp">EBinaryOp</a>
        </span>{" "}
        <span className="id">
          <a href="ErgoSpec.Ergo.Lang.ErgoSem.html#a">a</a>
        </span>{" "}
        <span className="id">
          <a href="ErgoSpec.Ergo.Lang.ErgoSem.html#bop">bop</a>
        </span>{" "}
        <span className="id">
          <a href="ErgoSpec.Ergo.Lang.ErgoSem.html#e1">e1</a>
        </span>{" "}
        <span className="id">
          <a href="ErgoSpec.Ergo.Lang.ErgoSem.html#e2">e2</a>
        </span>
        ){" "}
        <span className="id">
          <a href="ErgoSpec.Ergo.Lang.ErgoSem.html#d2">d2</a>
        </span>
        <br />
        &nbsp;&nbsp;|{" "}
        <span className="id">
          <a name="sem_EIf_true">sem_EIf_true</a>
        </span>{" "}
        : <span className="kwd">forall</span> <span className="id">a</span>{" "}
        <span className="id">mc</span> <span className="id">env</span>{" "}
        <span className="id">e1</span> <span className="id">e2</span>{" "}
        <span className="id">e3</span> <span className="id">d</span>,<br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <span className="id">
          <a href="ErgoSpec.Ergo.Lang.ErgoSem.html#ergo_expr_sem">ergo_expr_sem</a>
        </span>{" "}
        <span className="id">
          <a href="ErgoSpec.Ergo.Lang.ErgoSem.html#mc">mc</a>
        </span>{" "}
        <span className="id">
          <a href="ErgoSpec.Ergo.Lang.ErgoSem.html#env">env</a>
        </span>{" "}
        <span className="id">
          <a href="ErgoSpec.Ergo.Lang.ErgoSem.html#e1">e1</a>
        </span>{" "}
        (
        <span className="id">
          <a href="ErgoSpec.Backend.ErgoBackend.html#ErgoData.dbool">
            ErgoData.dbool
          </a>
        </span>{" "}
        <span className="id">
          <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#true">
            true
          </a>
        </span>
        ) -&gt;
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <span className="id">
          <a href="ErgoSpec.Ergo.Lang.ErgoSem.html#ergo_expr_sem">ergo_expr_sem</a>
        </span>{" "}
        <span className="id">
          <a href="ErgoSpec.Ergo.Lang.ErgoSem.html#mc">mc</a>
        </span>{" "}
        <span className="id">
          <a href="ErgoSpec.Ergo.Lang.ErgoSem.html#env">env</a>
        </span>{" "}
        <span className="id">
          <a href="ErgoSpec.Ergo.Lang.ErgoSem.html#e2">e2</a>
        </span>{" "}
        <span className="id">
          <a href="ErgoSpec.Ergo.Lang.ErgoSem.html#d">d</a>
        </span>{" "}
        -&gt;
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <span className="id">
          <a href="ErgoSpec.Ergo.Lang.ErgoSem.html#ergo_expr_sem">ergo_expr_sem</a>
        </span>{" "}
        <span className="id">
          <a href="ErgoSpec.Ergo.Lang.ErgoSem.html#mc">mc</a>
        </span>{" "}
        <span className="id">
          <a href="ErgoSpec.Ergo.Lang.ErgoSem.html#env">env</a>
        </span>{" "}
        (
        <span className="id">
          <a href="ErgoSpec.Ergo.Lang.Ergo.html#EIf">EIf</a>
        </span>{" "}
        <span className="id">
          <a href="ErgoSpec.Ergo.Lang.ErgoSem.html#a">a</a>
        </span>{" "}
        <span className="id">
          <a href="ErgoSpec.Ergo.Lang.ErgoSem.html#e1">e1</a>
        </span>{" "}
        <span className="id">
          <a href="ErgoSpec.Ergo.Lang.ErgoSem.html#e2">e2</a>
        </span>{" "}
        <span className="id">
          <a href="ErgoSpec.Ergo.Lang.ErgoSem.html#e3">e3</a>
        </span>
        ){" "}
        <span className="id">
          <a href="ErgoSpec.Ergo.Lang.ErgoSem.html#d">d</a>
        </span>
        <br />
        &nbsp;&nbsp;|{" "}
        <span className="id">
          <a name="sem_EIf_false">sem_EIf_false</a>
        </span>{" "}
        : <span className="kwd">forall</span> <span className="id">a</span>{" "}
        <span className="id">mc</span> <span className="id">env</span>{" "}
        <span className="id">e1</span> <span className="id">e2</span>{" "}
        <span className="id">e3</span> <span className="id">d</span>,<br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <span className="id">
          <a href="ErgoSpec.Ergo.Lang.ErgoSem.html#ergo_expr_sem">ergo_expr_sem</a>
        </span>{" "}
        <span className="id">
          <a href="ErgoSpec.Ergo.Lang.ErgoSem.html#mc">mc</a>
        </span>{" "}
        <span className="id">
          <a href="ErgoSpec.Ergo.Lang.ErgoSem.html#env">env</a>
        </span>{" "}
        <span className="id">
          <a href="ErgoSpec.Ergo.Lang.ErgoSem.html#e1">e1</a>
        </span>{" "}
        (
        <span className="id">
          <a href="ErgoSpec.Backend.ErgoBackend.html#ErgoData.dbool">
            ErgoData.dbool
          </a>
        </span>{" "}
        <span className="id">
          <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#false">
            false
          </a>
        </span>
        ) -&gt;
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <span className="id">
          <a href="ErgoSpec.Ergo.Lang.ErgoSem.html#ergo_expr_sem">ergo_expr_sem</a>
        </span>{" "}
        <span className="id">
          <a href="ErgoSpec.Ergo.Lang.ErgoSem.html#mc">mc</a>
        </span>{" "}
        <span className="id">
          <a href="ErgoSpec.Ergo.Lang.ErgoSem.html#env">env</a>
        </span>{" "}
        <span className="id">
          <a href="ErgoSpec.Ergo.Lang.ErgoSem.html#e3">e3</a>
        </span>{" "}
        <span className="id">
          <a href="ErgoSpec.Ergo.Lang.ErgoSem.html#d">d</a>
        </span>{" "}
        -&gt;
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <span className="id">
          <a href="ErgoSpec.Ergo.Lang.ErgoSem.html#ergo_expr_sem">ergo_expr_sem</a>
        </span>{" "}
        <span className="id">
          <a href="ErgoSpec.Ergo.Lang.ErgoSem.html#mc">mc</a>
        </span>{" "}
        <span className="id">
          <a href="ErgoSpec.Ergo.Lang.ErgoSem.html#env">env</a>
        </span>{" "}
        (
        <span className="id">
          <a href="ErgoSpec.Ergo.Lang.Ergo.html#EIf">EIf</a>
        </span>{" "}
        <span className="id">
          <a href="ErgoSpec.Ergo.Lang.ErgoSem.html#a">a</a>
        </span>{" "}
        <span className="id">
          <a href="ErgoSpec.Ergo.Lang.ErgoSem.html#e1">e1</a>
        </span>{" "}
        <span className="id">
          <a href="ErgoSpec.Ergo.Lang.ErgoSem.html#e2">e2</a>
        </span>{" "}
        <span className="id">
          <a href="ErgoSpec.Ergo.Lang.ErgoSem.html#e3">e3</a>
        </span>
        ){" "}
        <span className="id">
          <a href="ErgoSpec.Ergo.Lang.ErgoSem.html#d">d</a>
        </span>
        <br />
        &nbsp;&nbsp;|{" "}
        <span className="id">
          <a name="sem_ELet">sem_ELet</a>
        </span>{" "}
        : <span className="kwd">forall</span> <span className="id">a</span>{" "}
        <span className="id">mc</span> <span className="id">env</span>{" "}
        <span className="id">v</span> <span className="id">e1</span>{" "}
        <span className="id">e2</span> <span className="id">d1</span>{" "}
        <span className="id">d2</span>,<br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <span className="id">
          <a href="ErgoSpec.Ergo.Lang.ErgoSem.html#ergo_expr_sem">ergo_expr_sem</a>
        </span>{" "}
        <span className="id">
          <a href="ErgoSpec.Ergo.Lang.ErgoSem.html#mc">mc</a>
        </span>{" "}
        <span className="id">
          <a href="ErgoSpec.Ergo.Lang.ErgoSem.html#env">env</a>
        </span>{" "}
        <span className="id">
          <a href="ErgoSpec.Ergo.Lang.ErgoSem.html#e1">e1</a>
        </span>{" "}
        <span className="id">
          <a href="ErgoSpec.Ergo.Lang.ErgoSem.html#d1">d1</a>
        </span>{" "}
        -&gt;
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <span className="id">
          <a href="ErgoSpec.Ergo.Lang.ErgoSem.html#ergo_expr_sem">ergo_expr_sem</a>
        </span>{" "}
        <span className="id">
          <a href="ErgoSpec.Ergo.Lang.ErgoSem.html#mc">mc</a>
        </span>{" "}
        (
        <span className="id">
          <a href="ErgoSpec.Ergo.Lang.ErgoSem.html#env_add_variable">
            env_add_variable
          </a>
        </span>{" "}
        <span className="id">
          <a href="ErgoSpec.Ergo.Lang.ErgoSem.html#env">env</a>
        </span>{" "}
        <span className="id">
          <a href="ErgoSpec.Ergo.Lang.ErgoSem.html#v">v</a>
        </span>{" "}
        <span className="id">
          <a href="ErgoSpec.Ergo.Lang.ErgoSem.html#d1">d1</a>
        </span>
        ){" "}
        <span className="id">
          <a href="ErgoSpec.Ergo.Lang.ErgoSem.html#e2">e2</a>
        </span>{" "}
        <span className="id">
          <a href="ErgoSpec.Ergo.Lang.ErgoSem.html#d2">d2</a>
        </span>{" "}
        -&gt;
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <span className="id">
          <a href="ErgoSpec.Ergo.Lang.ErgoSem.html#ergo_expr_sem">ergo_expr_sem</a>
        </span>{" "}
        <span className="id">
          <a href="ErgoSpec.Ergo.Lang.ErgoSem.html#mc">mc</a>
        </span>{" "}
        <span className="id">
          <a href="ErgoSpec.Ergo.Lang.ErgoSem.html#env">env</a>
        </span>{" "}
        (
        <span className="id">
          <a href="ErgoSpec.Ergo.Lang.Ergo.html#ELet">ELet</a>
        </span>{" "}
        <span className="id">
          <a href="ErgoSpec.Ergo.Lang.ErgoSem.html#a">a</a>
        </span>{" "}
        <span className="id">
          <a href="ErgoSpec.Ergo.Lang.ErgoSem.html#v">v</a>
        </span>{" "}
        <span className="id">
          <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#None">
            None
          </a>
        </span>{" "}
        <span className="id">
          <a href="ErgoSpec.Ergo.Lang.ErgoSem.html#e1">e1</a>
        </span>{" "}
        <span className="id">
          <a href="ErgoSpec.Ergo.Lang.ErgoSem.html#e2">e2</a>
        </span>
        ){" "}
        <span className="id">
          <a href="ErgoSpec.Ergo.Lang.ErgoSem.html#d2">d2</a>
        </span>
        <br />
        &nbsp;&nbsp;|{" "}
        <span className="id">
          <a name="sem_ELet_typed">sem_ELet_typed</a>
        </span>{" "}
        : <span className="kwd">forall</span> <span className="id">a</span>{" "}
        <span className="id">mc</span> <span className="id">env</span>{" "}
        <span className="id">v</span> <span className="id">t</span>{" "}
        <span className="id">e1</span> <span className="id">e2</span>{" "}
        <span className="id">d1</span> <span className="id">d2</span>,<br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <span className="id">
          <a href="ErgoSpec.Ergo.Lang.ErgoSem.html#ergo_expr_sem">ergo_expr_sem</a>
        </span>{" "}
        <span className="id">
          <a href="ErgoSpec.Ergo.Lang.ErgoSem.html#mc">mc</a>
        </span>{" "}
        <span className="id">
          <a href="ErgoSpec.Ergo.Lang.ErgoSem.html#env">env</a>
        </span>{" "}
        <span className="id">
          <a href="ErgoSpec.Ergo.Lang.ErgoSem.html#e1">e1</a>
        </span>{" "}
        <span className="id">
          <a href="ErgoSpec.Ergo.Lang.ErgoSem.html#d1">d1</a>
        </span>{" "}
        -&gt;
        <br />
        <div className="doc">instance_of d1 t1 = true -&gt; </div>
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <span className="id">
          <a href="ErgoSpec.Ergo.Lang.ErgoSem.html#ergo_expr_sem">ergo_expr_sem</a>
        </span>{" "}
        <span className="id">
          <a href="ErgoSpec.Ergo.Lang.ErgoSem.html#mc">mc</a>
        </span>{" "}
        (
        <span className="id">
          <a href="ErgoSpec.Ergo.Lang.ErgoSem.html#env_add_variable">
            env_add_variable
          </a>
        </span>{" "}
        <span className="id">
          <a href="ErgoSpec.Ergo.Lang.ErgoSem.html#env">env</a>
        </span>{" "}
        <span className="id">
          <a href="ErgoSpec.Ergo.Lang.ErgoSem.html#v">v</a>
        </span>{" "}
        <span className="id">
          <a href="ErgoSpec.Ergo.Lang.ErgoSem.html#d1">d1</a>
        </span>
        ){" "}
        <span className="id">
          <a href="ErgoSpec.Ergo.Lang.ErgoSem.html#e2">e2</a>
        </span>{" "}
        <span className="id">
          <a href="ErgoSpec.Ergo.Lang.ErgoSem.html#d2">d2</a>
        </span>{" "}
        -&gt;
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <span className="id">
          <a href="ErgoSpec.Ergo.Lang.ErgoSem.html#ergo_expr_sem">ergo_expr_sem</a>
        </span>{" "}
        <span className="id">
          <a href="ErgoSpec.Ergo.Lang.ErgoSem.html#mc">mc</a>
        </span>{" "}
        <span className="id">
          <a href="ErgoSpec.Ergo.Lang.ErgoSem.html#env">env</a>
        </span>{" "}
        (
        <span className="id">
          <a href="ErgoSpec.Ergo.Lang.Ergo.html#ELet">ELet</a>
        </span>{" "}
        <span className="id">
          <a href="ErgoSpec.Ergo.Lang.ErgoSem.html#a">a</a>
        </span>{" "}
        <span className="id">
          <a href="ErgoSpec.Ergo.Lang.ErgoSem.html#v">v</a>
        </span>{" "}
        (
        <span className="id">
          <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#Some">
            Some
          </a>
        </span>{" "}
        <span className="id">
          <a href="ErgoSpec.Ergo.Lang.ErgoSem.html#t">t</a>
        </span>
        ){" "}
        <span className="id">
          <a href="ErgoSpec.Ergo.Lang.ErgoSem.html#e1">e1</a>
        </span>{" "}
        <span className="id">
          <a href="ErgoSpec.Ergo.Lang.ErgoSem.html#e2">e2</a>
        </span>
        ){" "}
        <span className="id">
          <a href="ErgoSpec.Ergo.Lang.ErgoSem.html#d2">d2</a>
        </span>
        <br />
        &nbsp;&nbsp;|{" "}
        <span className="id">
          <a name="sem_ERecord_nil">sem_ERecord_nil</a>
        </span>{" "}
        : <span className="kwd">forall</span> <span className="id">a</span>{" "}
        <span className="id">mc</span> <span className="id">env</span>,<br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <span className="id">
          <a href="ErgoSpec.Ergo.Lang.ErgoSem.html#ergo_expr_sem">ergo_expr_sem</a>
        </span>{" "}
        <span className="id">
          <a href="ErgoSpec.Ergo.Lang.ErgoSem.html#mc">mc</a>
        </span>{" "}
        <span className="id">
          <a href="ErgoSpec.Ergo.Lang.ErgoSem.html#env">env</a>
        </span>{" "}
        (
        <span className="id">
          <a href="ErgoSpec.Ergo.Lang.Ergo.html#ERecord">ERecord</a>
        </span>{" "}
        <span className="id">
          <a href="ErgoSpec.Ergo.Lang.ErgoSem.html#a">a</a>
        </span>{" "}
        <span className="id">
          <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#nil">nil</a>
        </span>
        ) (
        <span className="id">
          <a href="ErgoSpec.Backend.ErgoBackend.html#ErgoData.drec">
            ErgoData.drec
          </a>
        </span>{" "}
        <span className="id">
          <a href="http://coq.inria.fr/library/Coq.Init.Datatypes.html#nil">nil</a>
        </span>
        )<br />
        &nbsp;&nbsp;|{" "}
        <span className="id">
          <a name="sem_ERecord_cons">sem_ERecord_cons</a>
        </span>{" "}
        : <span className="kwd">forall</span> <span className="id">a1</span>{" "}
        <span className="id">a2</span> <span className="id">mc</span>{" "}
        <span className="id">env</span> <span className="id">v</span>{" "}
        <span className="id">e1</span> <span className="id">el</span>{" "}
        <span className="id">d1</span> <span className="id">rl</span>{" "}
        <span className="id">rl</span>',
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <span className="id">
          <a href="ErgoSpec.Ergo.Lang.ErgoSem.html#ergo_expr_sem">ergo_expr_sem</a>
        </span>{" "}
        <span className="id">
          <a href="ErgoSpec.Ergo.Lang.ErgoSem.html#mc">mc</a>
        </span>{" "}
        <span className="id">
          <a href="ErgoSpec.Ergo.Lang.ErgoSem.html#env">env</a>
        </span>{" "}
        <span className="id">
          <a href="ErgoSpec.Ergo.Lang.ErgoSem.html#e1">e1</a>
        </span>{" "}
        <span className="id">
          <a href="ErgoSpec.Ergo.Lang.ErgoSem.html#d1">d1</a>
        </span>{" "}
        -&gt;
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <span className="id">
          <a href="ErgoSpec.Ergo.Lang.ErgoSem.html#ergo_expr_sem">ergo_expr_sem</a>
        </span>{" "}
        <span className="id">
          <a href="ErgoSpec.Ergo.Lang.ErgoSem.html#mc">mc</a>
        </span>{" "}
        <span className="id">
          <a href="ErgoSpec.Ergo.Lang.ErgoSem.html#env">env</a>
        </span>{" "}
        (
        <span className="id">
          <a href="ErgoSpec.Ergo.Lang.Ergo.html#ERecord">ERecord</a>
        </span>{" "}
        <span className="id">
          <a href="ErgoSpec.Ergo.Lang.ErgoSem.html#a1">a1</a>
        </span>{" "}
        <span className="id">
          <a href="ErgoSpec.Ergo.Lang.ErgoSem.html#el">el</a>
        </span>
        ) (
        <span className="id">
          <a href="ErgoSpec.Backend.ErgoBackend.html#ErgoData.drec">
            ErgoData.drec
          </a>
        </span>{" "}
        <span className="id">
          <a href="ErgoSpec.Ergo.Lang.ErgoSem.html#rl">rl</a>
        </span>
        ) -&gt;
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <span className="id">
          <a href="https://querycert.github.io/html/Qcert.Utils.Bindings.html#rec_sort">
            rec_sort
          </a>
        </span>{" "}
        ((
        <span className="id">
          <a href="ErgoSpec.Ergo.Lang.ErgoSem.html#v">v</a>
        </span>
        ,
        <span className="id">
          <a href="ErgoSpec.Ergo.Lang.ErgoSem.html#d1">d1</a>
        </span>
        )::
        <span className="id">
          <a href="ErgoSpec.Ergo.Lang.ErgoSem.html#rl">rl</a>
        </span>
        ) = <span className="id">rl</span>' -&gt; <br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <span className="id">
          <a href="ErgoSpec.Ergo.Lang.ErgoSem.html#ergo_expr_sem">ergo_expr_sem</a>
        </span>{" "}
        <span className="id">
          <a href="ErgoSpec.Ergo.Lang.ErgoSem.html#mc">mc</a>
        </span>{" "}
        <span className="id">
          <a href="ErgoSpec.Ergo.Lang.ErgoSem.html#env">env</a>
        </span>{" "}
        (
        <span className="id">
          <a href="ErgoSpec.Ergo.Lang.Ergo.html#ERecord">ERecord</a>
        </span>{" "}
        <span className="id">
          <a href="ErgoSpec.Ergo.Lang.ErgoSem.html#a2">a2</a>
        </span>{" "}
        ((
        <span className="id">
          <a href="ErgoSpec.Ergo.Lang.ErgoSem.html#v">v</a>
        </span>
        ,
        <span className="id">
          <a href="ErgoSpec.Ergo.Lang.ErgoSem.html#e1">e1</a>
        </span>
        )::
        <span className="id">
          <a href="ErgoSpec.Ergo.Lang.ErgoSem.html#el">el</a>
        </span>
        )) (
        <span className="id">
          <a href="ErgoSpec.Backend.ErgoBackend.html#ErgoData.drec">
            ErgoData.drec
          </a>
        </span>{" "}
        <span className="id">rl</span>').
        <br />
        <br />
        <span className="kwd">End</span>{" "}
        <span className="id">
          <a href="ErgoSpec.Ergo.Lang.ErgoSem.html#ErgoSem">ErgoSem</a>
        </span>
        .<br />
        <br />
      </div>
      <div className="footer">
        <hr />
        Generated by <a href="https://github.com/xavierleroy/coq2html/">coq2html</a>
      </div>
      <a href="https://github.com/xavierleroy/coq2html/"></a>
    </div>;
    