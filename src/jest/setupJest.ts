import 'jest-preset-angular';
import './jestGlobalMocks';
import { Type } from '@angular/core/src/type';
import { async, MetadataOverride, TestBed, TestModuleMetadata } from '@angular/core/testing';

// global imports
import 'rxjs/add/observable/of';

const resetTestingModule = TestBed.resetTestingModule;
const preventAngularFromResetting = () => TestBed.resetTestingModule = () => TestBed;

global.setupTestBed = (moduleDef: TestModuleMetadata, testModule?: Type<any>, override?: MetadataOverride<any>) => {
  beforeAll(async(async () => {
    resetTestingModule();
    preventAngularFromResetting();
    TestBed.configureTestingModule(moduleDef);
    if (testModule && override) {
      TestBed.overrideModule(testModule, override);
    }
    await TestBed.compileComponents();
  }));

  afterAll(() => resetTestingModule());
};

global.later = (delay) => {
  return new Promise((resolve) => {
    setTimeout(resolve, delay);
  });
};
